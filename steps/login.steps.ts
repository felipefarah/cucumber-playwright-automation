import { Given, When, Then} from "@cucumber/cucumber";
import {chromium, type Page,  type Browser} from "@playwright/test";
import assert from "assert";

let browser: Browser;
let page: Page;

Given("que o usuário está na página de login", async () => {
    browser = await chromium.launch({ headless: false});
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/login");
});

When("ele insere usuário {string} e senha {string}", async (user, pass) => {
    await page.fill("#username", user);
    await page.fill("#password", pass);
});

When("clica em {string}", async (button) => {
    await page.click(`text=${button}`);
});

Then("ele deve ver a mensagem {string}", async (message) => {
    const text = await page.textContent("#flash");
    assert(text?.includes(message));
    await browser.close();
})
   