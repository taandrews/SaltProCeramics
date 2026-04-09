import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("scripts/shots", { recursive: true });

const URL = process.argv[2] || "http://localhost:4070/";
const NAME = process.argv[3] || "fullpage";

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForLoadState("load").catch(() => {});
await page.waitForTimeout(3500);

const dims = await page.evaluate(() => ({
  scrollHeight: document.documentElement.scrollHeight,
  clientHeight: document.documentElement.clientHeight,
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
}));
console.log("dims", dims);

await page.screenshot({ path: `scripts/shots/${NAME}.png`, fullPage: true });
await browser.close();
