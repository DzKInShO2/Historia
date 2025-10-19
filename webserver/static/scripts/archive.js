const getFullUrl = (web, url) => {
    let result = url;
    if (result?.[0] == '/') {
        const base = web.split("/")[0] + "//" + web.split("/")[2];
        result = `${base}${result}`;
    }

    if (!result?.includes("https") && !result?.includes("http") && !result?.includes("ftp")) {
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

const unravelScripts = async (body, url, time) => {
    const regex = /<script\s+([^>]*?)>/g;

    let result = "";
    let lastIndex = 0;
    for (const match of body.matchAll(regex)) {
        const [fullMatch, attrs] = match;
        const matchStart = match.index;
        const matchEnd = matchStart + fullMatch.length;

        result += body.slice(lastIndex, matchStart);

        const src = getFullUrl(url, attrs.match(/src=["']?([^"'\s>]+)["']?/)?.[1]);

        const s = await getArchive(src, time);
        result += `<script>\n${s}</script>`;

        lastIndex = matchEnd;
    }

    result += body.slice(lastIndex);
    return result;
};

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
        result += fullMatch.replace(/(.*?)src=".*?"(.*?)/, `$1src="/archive/${i}"$2`);

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

    archive.body = await unravelLinks(archive.body, url, time);
    archive.body = await unravelImages(archive.body, url, time);
    archive.body = archive.body.replace("</head>", 
                                        `<link rel="stylesheet" href="/static/styles/style.css">
                                        </head>`);

    return [title, archive.body];
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
            window.contract.methods.pushArchive(url, time, kind, jason.content).send({ from: window.account });
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
            const href = getFullUrl(url, l.match(/href=["']?([^"'\s>]+)["']?/)?.[1]);

            if (rel == "stylesheet" || type == "text/css") {
                await archiveWeb_(batch, href, time, 10);
            }
        }

        for (const s of scripts) {
            const src  = getFullUrl(url, s.match(/src=["']?([^"'\s>]+)["']?/)?.[1]);
            await archiveWeb_(batch, src, time, 20);
        }

        for (const i of images) {
            const src  = getFullUrl(url, i.match(/src=["']?([^"'\s>]+)["']?/)?.[1]);

            const ext = src.split(".").at(-1);
            await archiveWeb_(batch, src, time, 30);
        }
    } catch (e) {
        console.error(e);
    }
}

const archiveWeb = async (url, time, kind) => {
    let batch = new web3.BatchRequest();

    await archiveWeb_(batch, url, time, kind);
    try {
        await batch.execute();
    } catch (e) {
        console.warn(e.message);
    }
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
        const [ title, content ] = await getArchive(web, time);
        document.write(content);
        document.title = `Historia - ${title}`;
        return;
    }

    const archiveTimes = await getUrlArchiveTimes(web);
    if (archiveTimes && archiveTimes.length > 1) {
        const renewEl = document.createElement("div");
        renewEl.innerHTML = `
        <div class="historia-content">
            <h2>Want to create more <a href="${web}">${web}</a> archive?</h2>
            <button onclick="archiveWeb\('${web}'\, ${Date.now()}, 0)">Archive it!</button>
        </div>
        `

        const timesEl = document.createElement("div");
        timesEl.className = "historia-times-scroll";
        for (let i = archiveTimes.length - 1; i >= 0; i--) {
            const t = archiveTimes[i];
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
                <div class="historia-content">
                    <h2>Archive for <a href="${web}">${web}</a> is not found</h2>
                    <h3>Do you want to archive it now?</h3>
                    <button onclick="archiveWeb\('${web}'\, ${Date.now()}, 0)">Archive it</button>
                </div>
            `;
        }
    }
};
