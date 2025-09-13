import { setWorldConstructor, World } from "@cucumber/cucumber";
import { type Browser, type Page, type BrowserContext, chromium } from "playwright/test";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async initBrowser(headless = true) {
    this.browser = await chromium.launch({ headless });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);