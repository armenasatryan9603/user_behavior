import { createEvent } from "../../services/eventService";
import { API_URL, ERROR_MESSAGES, EVENT_ACTION } from '../../constants';


describe("EventService Test", () => {
    const data = {
        url: "some url",
        eventDetails: {
            // ...
        },
    };
    test("Create Event test", async () => {
        const fakeFetch = jest.fn();
        window.fetch = fakeFetch;
        const fakeResponse = await createEvent(data);

        expect(fakeResponse).toBe(undefined);
        expect(fakeFetch.mock.calls[0][0]).toBe(API_URL + EVENT_ACTION);
        expect(fakeFetch.mock.calls[0][1]).toHaveProperty("headers");
        expect(fakeFetch.mock.calls[0][1]).toHaveProperty("body");
    });
});
