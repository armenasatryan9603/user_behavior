/*global chrome*/
import { RESOURCE_LIST, EVENT_NAMES } from './../extension/src/constants.js';
import { createEvent } from './../extension/src/services/eventService.js';

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request === "start") {
            chrome.tabs.onUpdated.addListener(handleTabLoaded);
        } else {
            chrome.tabs.onUpdated.removeListener(handleTabLoaded);
        }
        sendResponse("bar");
    }
);

function handleTabLoaded(tabId, changeInfo, tab) {
    const validResource = !!RESOURCE_LIST.find((resources) => resources.test(tab.url));

    if (validResource && changeInfo.status === 'complete') {
        chrome.tabs.sendMessage(
            tabId,
            {
                text: 'report_back'
            },
            async (e) => {
                const parser = new DOMParser();
                var DOM = parser.parseFromString(e, "text/html");

                const isCategoryEmpty = DOM.querySelector("#breadcrumb-back-link")?.innerText;
                let categories = [];

                if (!isCategoryEmpty) {
                    categories = Array.from(
                        DOM.querySelectorAll("#wayfinding-breadcrumbs_feature_div ul .a-list-item a")
                    )
                    .map(e => e.innerText.replace(/\s+/g, ''));
                }

                const reqBody = {
                    url: tab.url,
                    event: {
                        productName: DOM.querySelector("#productTitle")?.innerText?.replaceAll("\n", ""),
                        productBrand: DOM.querySelector("#bylineInfo")?.innerText.replaceAll("\n", ""),
                        price: DOM.querySelector("#corePrice_desktop .a-offscreen")?.innerText,
                        asin: DOM.querySelectorAll("#productDetails_detailBullets_sections1 tbody tr")[2]?.children[1]?.innerText?.replaceAll("\n", "") || '',
                        upc: "",
                        subscribePrice: "",
                        soldBy: DOM.getElementById("#bylineInfo")?.innerText?.replaceAll("\n", "") || '',
                        referringAction: 'Search',
                        itemTags: [''],
                        productAvailability: DOM.querySelector("#availability span")?.innerText?.replaceAll("\n", ""),
                        currency: DOM.querySelector("#icp-touch-link-cop .icp-color-base")?.innerText,
                        categories,
                        eventName: EVENT_NAMES.viewedProductDetail,
                        timestamp: Date.now(),
                    },
                };

                await createEvent(reqBody);
            }
        );
    }
}
