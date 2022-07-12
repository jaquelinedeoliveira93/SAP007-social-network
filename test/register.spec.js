/*
* @jest-environment jsdom
 */
import { registerUser, auth } from "../src/lib/auth-firebase.js"; // eslint-disable-line import/no-import-module-exports
import * as exports from "../src/lib/exports.js"; // eslint-disable-line import/no-import-module-exports
import register from "../src/templates/register.js"; // eslint-disable-line import/no-import-module-exports

jest.mock("../src/lib/exports.js");

it("registerUser deve ser chamada apenas uma vez", async () => {
  exports.createUserWithEmailAndPassword.mockResolvedValue({
    user: {},
  });
  await registerUser("teste1@teste.com", "123456");
  expect(exports.createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
});

describe("registerUser", () => {
  it("Deverá ser função de cadastrar usuário", () => {
    exports.createUserWithEmailAndPassword.mockResolvedValueOnce();
    const email = "teste1@teste.com";
    const password = "123456";
    const page = register();
    const emailRegister = page.querySelector("#email-register");
    const passwordRegister = page.querySelector("#password-register");

    emailRegister.value = email;
    passwordRegister.value = password;
    page.dispatchEvent(new Event("click"));

    expect(exports.createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(exports.createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });
  it("registerUser deve falhar na criação do usuário mostrando uma mensagem de erro", async () => {
    exports.createUserWithEmailAndPassword.mockRejectedValue({
      code: "erro no registro",
    });
    try {
      await registerUser("teste1@teste.com", "123456");
    } catch (error) {
      expect(error.code).toBe("erro no registro");
    }
  });
});
