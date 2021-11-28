import { handleEmailValidation } from '../utils';

describe("Email verification test", () => {
    test("with correct email", () => {
        const result = handleEmailValidation("myEmail@gmail.com");
        expect(result).toBeTruthy();
    });

    test("with incorrect email", () => {
        const result = handleEmailValidation("myEmail");
        expect(result).not.toBeTruthy();
    });
});
