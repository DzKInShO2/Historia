const getUrlContent = async (url) => {
    try {
        const response = await fetch("/archive", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                "web": url
            })
        });

        const jason = await response.json();

        return jason;
    } catch (e) {
        return null;
    }
}

const binaryStringToBlob = (binaryStr, mime = 'image/png') => {
    const len = binaryStr.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
    }
    return new Blob([bytes], { type: mime });
}

window.onload = async () => {
    const headEl = document.getElementById("head");
    const bodyEl = document.getElementById("body");

    const webUrl = new URL(window.location.href).searchParams.get("web");

    const content = await getUrlContent(webUrl);
    if (content) {
        let objects = {};
        let contentHead = content.head;
        let contentBody = content.body;

        contentHead = contentHead.replace(/<link\s+([^>]*?)>/g, (match, attrs) => {
            const relMatch = attrs.match(/rel=["']?([^"'\s>]+)["']?/);
            const typeMatch = attrs.match(/type=["']?([^"'\s>]+)["']?/);

            let hrefMatch = attrs.match(/href=["']?([^"'\s>]+)["']?/);
            if (relMatch[1] == "stylesheet" || typeMatch[1] == "text/css") {
                hrefMatch = hrefMatch[1];
                if (!hrefMatch.includes("https") || !hrefMatch.includes("http") || !hrefMatch.includes("ftp")) {
                    hrefMatch = webUrl + hrefMatch;
                }

                return "<style>" + content.styles[hrefMatch] + "</style>";
            }
        });

        contentBody = contentBody.replace(/<img\s+([^>]*?)>/g, (match, attrs) => {
            let srcMatch = attrs.match(/src=["']?([^"'\s>]+)["']?/)[1];
            if (!srcMatch.includes("https") || !srcMatch.includes("http") || !srcMatch.includes("ftp")) {
                srcMatch = webUrl + srcMatch;
            }

            return `<img src="data:image/png;base64,${content.images[srcMatch]}">`
        });

        headEl.innerHTML = contentHead;
        bodyEl.innerHTML = contentBody;
    }
};
