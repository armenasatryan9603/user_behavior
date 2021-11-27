import axios from "axios";
import { API_URL, ERROR_MESSAGES } from '../constants';


export const signInRequest = async (email, password) => {
    try {
        return await axios.post(API_URL, { email, password });
    } catch(error) {
        return {
            error: ERROR_MESSAGES.GLOBAL_ERROR_MESSAGE,
        };
    }
};

export const signUpRequest = async (email, password) => {
    try {
        return await axios.post(API_URL, { email, password });
    } catch(error) {
        return {
            error: ERROR_MESSAGES.GLOBAL_ERROR_MESSAGE,
        };
    }
};
