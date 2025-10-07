async function getCurrentAccount() {
    if (window.web3) {
        const accounts = await ethereum.request()
    }
}

function getGetParam(param) {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
}

window.onload = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        console.log("No web3 provider detected.");
    }

    if (window.account == null && window.web3 != null) {
        window.account = await getWallet();

        ethereum.on('accountsChanged', (accounts) => {
            window.account = accounts[0];
            window.location.reload();
        });
    }
}
