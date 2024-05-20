import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPage } from "../pages/commonPage"

let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
  commonPage.visitLink(url);
});

When("I accept the cookies", () => {
  commonPage.acceptCookies();
});

When("I check that the url value contain the text {string}", (urlValue) => {
  commonPage.checkUrlValue(urlValue);
});