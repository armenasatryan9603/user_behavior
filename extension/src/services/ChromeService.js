/*global chrome*/

export const addPageUpdateListener = () => {
    chrome.runtime.sendMessage(
        "start",
        function (response) {
            // TODO: Need to handle
            console.log(response);
        }
    );
};

export const removePageUpdateListener = () => {
    chrome.runtime.sendMessage(
        "stop",
        function (response) {
            // TODO: Need to handle
            console.log(response);
        }
    );
};