# USER BEVIOR


-----------------------------------------------------------------------------

##### BACK END #####

## Project setup

1. npm install
2. Change DB URL in app/config/db.config.js file to connect DB

## Run
npm start or node server.js

#### CREATE EVENT API EXAMPLE ####
curl --location --request GET 'http://<your_api_url>:8080/events' \
--header 'X-Custom-Header: token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "url": "",
    "event": {
        "productName": "",
        "productBrand": "",
        "price": "",
        "asin": "",
        "upc": "",
        "subscribePrice": "",
        "soldBy": "",
        "referringAction": "Search",
        "itemTags": [""],
        "productAvailability": "",
        "currency": "",
        "categories": [""],
        "eventName": "",
        "timestamp": "Date.now()"
    }
}'

-----------------------------------------------------------------------------

##### FRONT END #####

## Project setup

1. cd extension
2. yarn install or npm install
3. yarn run move or npm run move 

## Test
yarn test or npm test

## Run
yarn start or npm start

###### Using ######

1. Open Google Chrome
2. Go to url chrome://extensions/
3. Click on "Load unpacked" to load builded extension
4. Open extension and sign up

***additional***
5. Update hash in manifest.json (content_security_policy) to avoid content policy issues..

-----------------------------------------------------------------------------