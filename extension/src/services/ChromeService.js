/*global chrome*/
import cheerio from 'cheerio';
import { RESOURCE_LIST, EVENT_NAMES } from '../constants';
import { createEvent } from './eventService';
export const addPageUpdateListener = () => {
    chrome.tabs.onUpdated.addListener(handleTabLoaded);
};

export const removePageUpdateListener = () => {
    chrome.tabs.onUpdated.removeListener(handleTabLoaded);
};

function handleTabLoaded(tabId, changeInfo, tab) {
    const validResource = !!RESOURCE_LIST.find((resources) => resources.test(tab.url));
    if (validResource) {
        if (changeInfo.status === 'complete') {
            chrome.tabs.sendMessage(tabId, {text: 'report_back'}, async (e) => {
                const $ = cheerio.load(e);
                const chackCategory = $("#breadcrumb-back-link").text() === '';
                let categories = [];

                if (chackCategory) {
                    categories = $("#wayfinding-breadcrumbs_feature_div ul .a-list-item a").text().split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
                }

                const body = {
                    productName: $("#productTitle").text().replaceAll("\n", ""),
                    productBrand: $("#bylineInfo").text().replaceAll("\n", ""),
                    price: $("#corePrice_desktop .a-offscreen").text(),
                    asin: $("#productDetails_detailBullets_sections1 tbody tr")[2]?.children[3]?.children[0]?.data?.replaceAll("\n", "") || '',
                    upc: "",
                    subscribePrice: "",
                    soldBy: $("#productDetails_detailBullets_sections1 tbody tr")[8]?.children[3]?.children[0]?.data?.replaceAll("\n", "") || '',
                    referringAction: 'Search',
                    itemTags: [''],
                    productAvailability: $("#availability span").text().replaceAll("\n", ""),
                    currency: $("#icp-touch-link-cop .icp-color-base").text(),
                    categories,
                    eventName: EVENT_NAMES.viewedProductDetail,
                    timestamp: Date.now(),  
                };

                const response = await createEvent(body);
            });
        }
    }
}
