import { chromium } from "playwright";
import { mkdirSync, watch } from "fs";
import { resolve } from "path";

const OUT = "scripts/shots";
mkdirSync(OUT, { recursive: true });

const URL = process.env.URL || "http://localhost:4070/";
const VIEW = { width: 1440, height: 900 };

console.log("→ launching headed chromium...");
const browser = await chromium.launch({
  headless: false,
  args: ["--window-position=0,0", `--window-size=${VIEW.width},${VIEW.height + 90}`],
});

const ctx = await browser.newContext({ viewport: VIEW, deviceScaleFactor: 1 });
const page = await ctx.newPage();

async function load(label = "init") {
  try {
    console.log(`→ ${label}: ${URL}`);
    await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForLoadState("load").catch(() => {});
    await page.waitForTimeout(2500);
    await page.screenshot({ path: `${OUT}/current-fold.png`, fullPage: false });
    await page.screenshot({ path: `${OUT}/current-full.png`, fullPage: true });
    console.log(`✓ ${label} screenshot saved`);
  } catch (e) {
    console.error("× load failed:", e.message);
  }
}

await load("init");

// Watch the src directory for changes and reload
const watchPath = resolve("src");
let reloadTimer;
console.log(`→ watching ${watchPath}`);
watch(watchPath, { recursive: true }, (event, filename) => {
  if (!filename) return;
  if (filename.includes("~") || filename.endsWith(".swp")) return;
  clearTimeout(reloadTimer);
  reloadTimer = setTimeout(() => load(`change:${filename}`), 1500);
});

// Also expose a manual reload via SIGUSR2 (or just keep alive)
process.on("SIGTERM", async () => {
  await browser.close();
  process.exit(0);
});

// Keep alive forever
setInterval(() => {}, 1 << 30);
