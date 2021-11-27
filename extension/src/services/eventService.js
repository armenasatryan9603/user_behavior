import axios from "axios";
import { API_URL, EVENT_ACTION, ERROR_MESSAGES } from '../constants';


export const createEvent = async (data) => {
    try {
        return await axios.post(API_URL + EVENT_ACTION, data);
    } catch(error) {
        return {
            error: ERROR_MESSAGES.CREATE_EVENT_ERROR,
        };
    }
};

//these implementations is out of task ;) 
export const readEvents = async (id = '') => {
    try {
        return await axios.get(`${API_URL + EVENT_ACTION}/${id}`);
    } catch(error) {
        return {
            error: ERROR_MESSAGES.READ_EVENT_ERROR,
        };
    }
};

export const updateFullEvent = async (id = '', data = {}) => {
    try {
        return await axios.put(`${API_URL + EVENT_ACTION}/${id}`, data);
    } catch(error) {
        return {
            error: ERROR_MESSAGES.UPDATE_EVENT_ERROR,
        };
    }
};

export const updatePartlyEvent = async (id = '', mutationFields = {}) => {
    try {
        return await axios.patch(`${API_URL + EVENT_ACTION}/${id}`, mutationFields);
    } catch(error) {
        return {
            error: ERROR_MESSAGES.UPDATE_EVENT_ERROR,
        };
    }
};