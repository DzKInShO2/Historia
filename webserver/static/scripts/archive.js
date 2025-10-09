window.onload = async () => {
    const webUrl = new URL(window.location.href).searchParams.get("web");

    fetch("/archive", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            "web": webUrl
        })
    }).then(response => response.text())
    .then(text => {
        console.log(text);
    });
};
