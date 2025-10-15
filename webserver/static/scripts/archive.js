const img_ext_to_kind = {
    "png": 30,
    "jpeg": 31,
    "jpg": 31,
};

const getFullUrl = (web, url) => {
    let result = url;
    if (result?.[0] == '/') {
        const base = web.split("/")[0] + "//" + web.split("/")[2];
        result = `${base}${result}`;
    }

    if (!result?.includes("https") || !result?.includes("http") || !result?.includes("ftp")) {
         result = `${web}/${url}`;
    }

    return result;
}

const unravelLinks = async (body, url, time) => {
    const regex = /<link\s+([^>]*?)>/g;

    let result = "";
    let lastIndex = 0;
    for (const match of body.matchAll(regex)) {
        const [fullMatch, attrs] = match;
        const matchStart = match.index;
        const matchEnd = matchStart + fullMatch.length;

        result += body.slice(lastIndex, matchStart);

        const rel  = attrs.match(/rel=["']?([^"'\s>]+)["']?/)?.[1];
        const type = attrs.match(/type=["']?([^"'\s>]+)["']?/)?.[1];
        const href = getFullUrl(url, attrs.match(/href=["']?([^"'\s>]+)["']?/)?.[1]);

        if (rel === "stylesheet" || type === "text/css") {
            const c = await getArchive(href, time);
            result += `<style>\n${c}</style>`;
        } else {
            result += ""; 
        }

        lastIndex = matchEnd;
    }

    result += body.slice(lastIndex);
    return result;
}

const unravelImages = async (body, url, time) => {
    const regex = /<img\s+([^>]*?)>/g;

    let result = "";
    let lastIndex = 0;
    for (const match of body.matchAll(regex)) {
        const [fullMatch, attrs] = match;
        const matchStart = match.index;
        const matchEnd = matchStart + fullMatch.length;

        result += body.slice(lastIndex, matchStart);

        const src = getFullUrl(url, attrs.match(/src=["']?([^"'\s>]+)["']?/)?.[1]);

        const i = await getArchive(src, time);
        result += `<img src="/archive/${i}">`;

        lastIndex = matchEnd;
    }

    result += body.slice(lastIndex);
    return result;
}

const getUrlArchiveTimes = async (url) => {
    const contentEl = document.getElementById("content");

    if (window.contract == null) {
        contentEl.innerHTML = `
        <div>
            <h2>Sorry, but you're currently not connected to any provider</h2>
        </div>
        `;
        return null;
    }

    const archiveTimes = await window.contract.methods.getTimesOfArchive(url).call();
    if (archiveTimes) {
        return archiveTimes;
    }

    return null;
}

const getArchive = async (url, time) => {
    const archive = await window.contract.methods.getArchive(url, time).call();

    if (archive.kind != 0) return archive.body;

    const title = archive.body.match(/<title>(.*)<\/title>/)?.[1];
    document.title = `Historia - ${title}`

    archive.body = archive.body.replace("<head", `<div style="display: none;"`);
    archive.body = archive.body.replace("<body", `<div`);
    archive.body = archive.body.replace("</head>", "</div>").replace("</body>", "</div>");

    archive.body = await unravelLinks(archive.body, url, time);
    archive.body = await unravelImages(archive.body, url, time);

    return archive.body;

    // contentHead = contentHead.replace(/<link\s+([^>]*?)>/g, (match, attrs) => {
    //     const relMatch = attrs.match(/rel=["']?([^"'\s>]+)["']?/);
    //     const typeMatch = attrs.match(/type=["']?([^"'\s>]+)["']?/);
    //
    //     let hrefMatch = attrs.match(/href=["']?([^"'\s>]+)["']?/);
    //     if (relMatch[1] == "stylesheet" || typeMatch[1] == "text/css") {
    //         hrefMatch = hrefMatch[1];
    //         if (!hrefMatch.includes("https") || !hrefMatch.includes("http") || !hrefMatch.includes("ftp")) {
    //             hrefMatch = web + hrefMatch;
    //         }
    //
    //         return "<style>" + content.styles[hrefMatch] + "</style>";
    //     }
    // });
    //
    // contentBody = contentBody.replace(/<img\s+([^>]*?)>/g, (match, attrs) => {
    //     let srcMatch = attrs.match(/src=["']?([^"'\s>]+)["']?/)[1];
    //     if (!srcMatch.includes("https") || !srcMatch.includes("http") || !srcMatch.includes("ftp")) {
    //         srcMatch = web + srcMatch;
    //     }
    //
    //     return `<img src="data:image/png;base64,${content.images[srcMatch]}">`
    // });
}

const archiveWeb_ = async (batch, url, time, kind) => {
    const contentEl = document.getElementById("content");
    const existed = await window.contract.methods.getArchive(url, time).call();
    if (existed.body != "") return;

    try {
        const response = await fetch("/archive", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                "web": url,
                "kind": kind,
                "time": time
            })
        });

        const jason = await response.json();
        try {
            batch.add(window.contract.methods.pushArchive(url, time, kind, jason.content).send({ from: window.account }));
        } catch (e) {
            console.warn(e.message);
        }

        console.log(url, kind);
        console.log(jason.content);
        if (kind != 0) return;

        const links = jason.content.match(/<link.*?href.*?>/g) || [];
        const scripts = jason.content.match(/<script.*?src.*?><\/script>/g) || [];
        const images = jason.content.match(/<img.*?src.*?\/>/g) || [];

        for (const l of links) {
            const rel  = l.match(/rel=["']?([^"'\s>]+)["']?/)?.[1];
            const type = l.match(/type=["']?([^"'\s>]+)["']?/)?.[1];
            const href = getFullUrl(l.match(/href=["']?([^"'\s>]+)["']?/)?.[1]);

            if (rel == "stylesheet" || type == "text/css") {
                await archiveWeb_(batch, href, time, 10);
            }
        }

        for (const s of scripts) {
            let src  = s.match(/src=["']?([^"'\s>]+)["']?/)?.[1];

            await archiveWeb_(batch, src, time, 20);
        }

        for (const i of images) {
            let src  = i.match(/src=["']?([^"'\s>]+)["']?/)?.[1];

            src = getFullUrl(url, src);

            const ext = src.split(".").at(-1);
            const kind = img_ext_to_kind[ext];
            await archiveWeb_(batch, src, time, kind);
        }
    } catch (e) {
        console.error(e);
    }
}

const archiveWeb = async (url, time, kind) => {
    let batch = new web3.BatchRequest();

    await archiveWeb_(batch, url, time, kind);
    await batch.execute();

    window.location.reload();
}

window.onload = async () => {
    const contentEl = document.getElementById("content");
    if (window.ethereum) {
        const web3Provider = window.ethereum;
        window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
        const web3Provider = window.web3.currentProvider;
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        contentEl.innerHTML = `
            <div>
                <h3>Please make sure you're connected to Meta Mask or other Web3 provider</h3>
            </div>
        `;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    window.account = accounts[0];

    window.contract = new web3.eth.Contract(contract.abi, contract.networks["5777"].address);

    const url = new URL(window.location.href);

    const time = url.searchParams.get("time");
    let web = url.searchParams.get("web");
    if (web[web.length - 1 ] == "/") {
        web = web.slice(0, -1);
    }

    if (time != null && time != undefined) {
        const body = await getArchive(web, time);
        contentEl.innerHTML = body;
        return;
    }

    const archiveTimes = await getUrlArchiveTimes(web);
    if (archiveTimes && archiveTimes.length > 1) {
        const renewEl = document.createElement("div");
        renewEl.innerHTML = `
        <h2>Want to create more <a href="${web}">${web}</a> archive?</h2>
        <button onclick="archiveWeb\('${web}'\, ${Date.now()}, 0)">Archive it!</button>
        `

        const timesEl = document.createElement("div");
        for (const t of archiveTimes) {
            const time = new Date(Number(t));

            const timeEl = document.createElement("button");
            timeEl.innerHTML = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;
            timeEl.addEventListener("click", () => {
                window.location.href = `/archive?web=${web}&time=${t}`;
            });

            timesEl.appendChild(timeEl);
        }
        
        contentEl.appendChild(timesEl);
        contentEl.appendChild(renewEl);
    } else {
        if (contentEl) {
            contentEl.innerHTML = `
                <div>
                    <h2>Archive for <a href="${web}">${web}</a> is not found</h2>
                    <h3>Do you want to archive it now?</h3>
                    <button onclick="archiveWeb\('${web}'\, ${Date.now()}, 0)">Archive it</button>
                </div>
            `;
        }
    }
};
