export const getAuthToken = () => {
    return localStorage.getItem('token');
};

export const setAuthToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
};

export const removeAuthToken = () => {
    localStorage.removeItem('token');
};

export const handleChangeDOMScraping = (state) => {
    localStorage.setItem("scraping", state);
};

export const getDOMScrapingState = () => {
    return !!localStorage.getItem("scraping");
};