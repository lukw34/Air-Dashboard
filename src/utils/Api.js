const Api = async (url) => {
    const resp = await fetch(url);
    const body = await resp.json();
    return body;
};

export default Api;