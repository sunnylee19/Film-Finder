export default (baseUrl, queryParams = {}) => {
    const queryPart = Object.keys(queryParams).map(key => `${key}=${encodeURIComponent(queryParams[key])}`).join('&')
    return baseUrl + '?' + queryPart;
};
