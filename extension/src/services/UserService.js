import { API_URL, ERROR_MESSAGES, SIGN_UP_ACTION, SIGN_IN_ACTION } from '../constants.js';


export const signInRequest = async (email, password) => {
    try {
        const response = await fetch(API_URL + SIGN_IN_ACTION, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        return await response.json();
    } catch(error) {
        return {
            error: ERROR_MESSAGES.GLOBAL_ERROR_MESSAGE,
        };
    }
};

export const signUpRequest = async (name, email, password) => {
    try {
        const response = await fetch(API_URL + SIGN_UP_ACTION, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        return await response.json();
    } catch(error) {
        return {
            error: ERROR_MESSAGES.GLOBAL_ERROR_MESSAGE,
        };
    }
};
