// Quick standalone inspector — opens a fresh page, scrolls to a position, screenshots
import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("scripts/shots", { recursive: true });

const URL = process.argv[2] || "http://localhost:4070/";
const SCROLL = parseInt(process.argv[3] || "0", 10);
const NAME = process.argv[4] || "inspect";

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForLoadState("load").catch(() => {});
await page.waitForTimeout(3000);
if (SCROLL) await page.evaluate((y) => window.scrollTo(0, y), SCROLL);
await page.waitForTimeout(800);
await page.screenshot({ path: `scripts/shots/${NAME}.png`, fullPage: false });

// Also dump page errors / image load failures
const failed = await page.evaluate(() => {
  return Array.from(document.querySelectorAll("img")).map((img) => ({
    src: img.currentSrc || img.src,
    naturalWidth: img.naturalWidth,
    complete: img.complete,
  }));
});
console.log(JSON.stringify(failed, null, 2));

await browser.close();
