import { chromium, devices } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("scripts/shots", { recursive: true });

const URL = process.argv[2] || "http://localhost:4070/";
const NAME = process.argv[3] || "mobile";

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  ...devices["iPhone 13"],
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForLoadState("load").catch(() => {});
await page.waitForTimeout(3000);

const dims = await page.evaluate(() => ({
  scrollHeight: document.documentElement.scrollHeight,
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
}));
console.log("dims", dims);

await page.screenshot({ path: `scripts/shots/${NAME}-full.png`, fullPage: true });
await page.screenshot({ path: `scripts/shots/${NAME}-fold.png`, fullPage: false });
await browser.close();
