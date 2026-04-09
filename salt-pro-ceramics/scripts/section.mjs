// Take a screenshot of a specific section by selector
import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("scripts/shots", { recursive: true });

const URL = process.argv[2];
const Y = parseInt(process.argv[3] || "0", 10);
const NAME = process.argv[4] || "section";

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1.5,
});
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForLoadState("load").catch(() => {});
await page.waitForTimeout(3000);
await page.evaluate((y) => window.scrollTo(0, y), Y);
await page.waitForTimeout(800);
await page.screenshot({ path: `scripts/shots/${NAME}.png`, fullPage: false });
await browser.close();
