import { API_URL, EVENT_ACTION, ERROR_MESSAGES } from '../constants.js';
import { getAuthToken } from './storageService.js';

export const createEvent = async (data) => {
    try {
        return await fetch(API_URL + EVENT_ACTION, {
            method: 'POST',
            headers: {
                'X-Custom-Header': JSON.parse(getAuthToken()),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    } catch(error) {
        return {
            error: ERROR_MESSAGES.CREATE_EVENT_ERROR,
        };
    }
};

//these implementations is out of task ;) 
export const readEvents = async (id = '') => {
    try {
        return await fetch(`${API_URL + EVENT_ACTION}/${id}`, {
            method: 'GET',
            headers: {
                'X-Custom-Header': JSON.parse(getAuthToken()),
                'Content-Type': 'application/json'
            },
        });
    } catch(error) {
        return {
            error: ERROR_MESSAGES.READ_EVENT_ERROR,
        };
    }
};

export const updateFullEvent = async (id = '', data = {}) => {
    try {
        return await fetch(`${API_URL + EVENT_ACTION}/${id}`, {
            method: 'POST',
            headers: {
                'X-Custom-Header': JSON.parse(getAuthToken()),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    } catch(error) {
        return {
            error: ERROR_MESSAGES.UPDATE_EVENT_ERROR,
        };
    }
};

export const updatePartlyEvent = async (id = '', mutationFields = {}) => {
    try {
        return await fetch(`${API_URL + EVENT_ACTION}/${id}`, {
            method: 'PATCH',
            headers: {
                'X-Custom-Header': JSON.parse(getAuthToken()),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mutationFields)
        });
    } catch(error) {
        return {
            error: ERROR_MESSAGES.UPDATE_EVENT_ERROR,
        };
    }
};