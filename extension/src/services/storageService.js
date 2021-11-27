export const getAuthToken = () => {
    return JSON.parse(localStorage.getItem('token'));
};

export const setAuthToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
};

export const removeAuthToken = (token) => {
    localStorage.removeItem('token');
};

export const handleChangeDOMScraping = (state) => {
    localStorage.setItem("scraping", state);
};

export const getDOMScrapingState = () => {
    return JSON.parse(localStorage.getItem("scraping"));
};