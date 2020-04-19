const send = (method) => async (url, body = {}) => {
    const resp = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include'
    });
    if (resp.status !== 200) {
        throw new Error(`Server returned ${resp.status}`);
    }
    return await resp.json();
};

export const post = send('POST');
export const put = send('PUT');
export const remove = send('DELETE');

const query = (baseUrl, queryParams = {}) => {
    const queryPart = Object.keys(queryParams).map(key => `${key}=${encodeURIComponent(queryParams[key])}`).join('&')
    return baseUrl + '?' + queryPart;
};

export const get = async (url, params = {}) => {
    const resp = await fetch(query(url, params), {
        credentials: 'include'
    });
    if (resp.status !== 200) {
        throw new Error(`Server returned ${resp.status}`);
    }
    return await resp.json();
};

export default query;
