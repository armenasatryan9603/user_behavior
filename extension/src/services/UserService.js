import axios from "axios";
import { API_URL, ERROR_MESSAGES, SIGN_UP_ACTION, SIGN_IN_ACTION } from '../constants';


export const signInRequest = async (email, password) => {
    try {
        return await axios.post(API_URL + SIGN_IN_ACTION, { email, password });
    } catch(error) {
        return {
            error: ERROR_MESSAGES.GLOBAL_ERROR_MESSAGE,
        };
    }
};

export const signUpRequest = async (email, password) => {
    try {
        return await axios.post(API_URL + SIGN_UP_ACTION, { email, password });
    } catch(error) {
        return {
            error: ERROR_MESSAGES.GLOBAL_ERROR_MESSAGE,
        };
    }
};
