/*global chrome*/
import { TASK_COMMANDS } from '../constants.js';

export const addPageUpdateListener = () => {
    chrome.runtime.sendMessage(
        TASK_COMMANDS.START,
        function (response) {
            // TODO: Need to handle
            console.log(response);
        }
    );
};

export const removePageUpdateListener = () => {
    chrome.runtime.sendMessage(
        TASK_COMMANDS.STOP,
        function (response) {
            // TODO: Need to handle
            console.log(response);
        }
    );
};