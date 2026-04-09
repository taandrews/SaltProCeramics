// Crop screenshot to a region
import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("scripts/shots", { recursive: true });

const URL = process.argv[2];
const Y = parseInt(process.argv[3] || "0", 10);
const NAME = process.argv[4] || "zoom";

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1920, height: 1200 },
  deviceScaleFactor: 2,
  reducedMotion: "reduce",
});
const page = await ctx.newPage();

// Disable animations
await page.addStyleTag({
  content: `*, *::before, *::after { animation: none !important; transition: none !important; }`,
}).catch(() => {});

await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForLoadState("load").catch(() => {});

// Inject animation-disable AFTER page loads
await page.addStyleTag({
  content: `*, *::before, *::after { animation: none !important; transition: none !important; }`,
});
await page.waitForTimeout(2000);
await page.evaluate((y) => window.scrollTo(0, y), Y);
await page.waitForTimeout(500);

await page.screenshot({
  path: `scripts/shots/${NAME}.png`,
  clip: { x: 1000, y: 100, width: 800, height: 1000 },
});
await browser.close();
