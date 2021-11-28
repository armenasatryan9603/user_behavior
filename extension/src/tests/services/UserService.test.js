import { signInRequest, signUpRequest } from "../../services/UserService";
import { API_URL, ERROR_MESSAGES, SIGN_UP_ACTION, SIGN_IN_ACTION } from '../../constants';


describe("UserService Test", () => {
    test("Signin test", async () => {
        const fakeFetch = jest.fn();
        window.fetch = fakeFetch;
        const fakeResponse = await signInRequest("email@gmail.com", "1234");

        expect(fakeResponse.error).toBe(ERROR_MESSAGES.GLOBAL_ERROR_MESSAGE);
        expect(fakeFetch.mock.calls[0][0]).toBe(API_URL + SIGN_IN_ACTION);
        expect(fakeFetch.mock.calls[0][1]).toHaveProperty('headers');
        expect(fakeFetch.mock.calls[0][1]).toHaveProperty('body');
    });

    test("Signup test", async () => {
        const fakeFetch = jest.fn();
        window.fetch = fakeFetch;
        const fakeResponse = await signUpRequest("test name", "email@gmail.com", "1234");

        expect(fakeResponse.error).toBe(ERROR_MESSAGES.GLOBAL_ERROR_MESSAGE);
        expect(fakeFetch.mock.calls[0][0]).toBe(API_URL + SIGN_UP_ACTION);
        expect(fakeFetch.mock.calls[0][1]).toHaveProperty('headers');
        expect(fakeFetch.mock.calls[0][1]).toHaveProperty('body');
    });
});
