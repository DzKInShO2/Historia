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

window.onload = async () => {
    const webUrl = new URL(window.location.href).searchParams.get("web");
    console.log(await getUrlContent(webUrl));
};
