import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./features",         // onde estão os arquivos .feature
  timeout: 30000,                // tempo máximo por teste
  expect: { timeout: 5000 },
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
  use: {
    headless: false,             // true = não abre navegador, false = abre
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "on-first-retry",     // grava vídeo apenas se o teste falhar
    screenshot: "only-on-failure"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] }
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] }
    }
  ]
});