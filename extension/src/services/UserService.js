import { API_URL, GLOBAL_ERROR_MESSAGE } from '../constants';
import axios from "axios";

export const signInRequest = async (email, password) => {
    try {
        return await axios.post(API_URL, { email, password });
    } catch(error) {
        return {
            error: GLOBAL_ERROR_MESSAGE
        };
    }
    

};

export const signUpRequest = async (email, password) => {
    try {
        return await axios.post(API_URL, { email, password });
    } catch(error) {
        return {
            error: GLOBAL_ERROR_MESSAGE
        };
    }
};