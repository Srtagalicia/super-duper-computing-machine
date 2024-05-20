import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/loginPage"

let loginPage = new LoginPage();

When("I type {string} on the username credential input", (userName) => {
  loginPage.typeUserName(userName);
});

When("I type {string} on the password credential input", (password) => {
  loginPage.typePassword(password);
});

When("I click on the login button", () => {
  loginPage.clickLoginButton();
});

When("I click on the login modal button", () => {
  loginPage.clickLoginModalButton();
});

