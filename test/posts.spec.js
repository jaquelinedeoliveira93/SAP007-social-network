/*
* @jest-environment jsdom
*/
import { creatPost } from "../src/lib/firestore-firebase.js"; // eslint-disable-line import/no-unresolved
// import perfil from "../src/componentes/perfil.js";
import { profilePosts } from "../src/componentes/perfil.js";
import home from "../src/templates/home.js";

jest.mock("../src/lib/exports.js");
jest.mock("../src/lib/firestore-firebase.js");

describe("creatPost", () => {
  it("Deverá ser função de postar na timeline", () => {
    creatPost.mockResolvedValueOnce();
    const title = "Jest";
    const text = "Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine.";
    const page = home(); // eslint-disable-line no-undef
    const btn = page.querySelector(".post-button");
    const titleInput = page.querySelector("#title-post");
    const textInput = page.querySelector("#message");

    titleInput.value = title;
    textInput.value = text;
    btn.dispatchEvent(new Event("click"));

    expect(creatPost).toHaveBeenCalledTimes(1);
    expect(creatPost).toHaveBeenCalledWith(title, message); // eslint-disable-line no-undef
  });
});

describe("post", () => {
  it("Deverá criar um post", () => {
    const item = {
      title: "Teste",
      text: "Testando",
      user: "hgsyws2344d",
      id: "hydxbeychsd12",
    };
    const page = profilePosts(item); // eslint-disable-line no-undef
    const title = page.querySelector(".HQ-title-post");
    const text = page.querySelector(".message-post");
    const user = page.querySelector(".username-post");

    expect(title.textContent).toEqual(item.title);
    expect(text.textContent).toEqual(item.text);
    expect(user.textContent).toEqual(item.user);
  });
});
