export const getAuthToken = () => {
    return localStorage.getItem('authToken');
}

export const setAuthToken = (token) => {
    return localStorage.setItem('authToken', token);
}