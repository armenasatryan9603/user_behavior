export const API_URL = 'http://localhost:8080';
export const EVENT_ACTION = '/events';

export const ERROR_MESSAGES = {
    GLOBAL_ERROR_MESSAGE: "Something went wrong :(",
    CREATE_EVENT_ERROR: "Can't create event..",
    UPDATE_EVENT_ERROR: "Can't update event..",
    DELETE_EVENT_ERROR: "Can't delete event..",
    READ_EVENT_ERROR: "Can't read events..",
};

export const EVENT_NAMES = {
    viewedProductDetail: "viewedProductDetail",
    // ...
}

export const RESOURCE_LIST = [
    /(https:\/\/www.amazon.com\/[\s\S]*\/)(?:dp|o|gp|-|dp\/product|gp\/product)\/(B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(?:X|[0-9]))/,
];
