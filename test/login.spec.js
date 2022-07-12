import { signIn } from "../src/templates/login.js"; // eslint-disable-line import/named

describe("SignIn", () => {
  it("should be a function", () => {
    expect(typeof signIn).toBe("function");
  });
});
