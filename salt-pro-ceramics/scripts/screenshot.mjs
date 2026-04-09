import { chromium } from "playwright";
import { mkdirSync } from "fs";

const OUT = "scripts/shots";
mkdirSync(OUT, { recursive: true });

const pages = [
  { name: "home", url: "http://localhost:4070/" },
  { name: "product", url: "http://localhost:4070/products/marine-metal-guard" },
];

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch({ headless: false });

for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();

  for (const p of pages) {
    console.log(`→ ${vp.name} ${p.name}`);
    await page.goto(p.url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForLoadState("load").catch(() => {});
    await page.waitForTimeout(3500); // let fonts/animations settle

    // Full page screenshot
    await page.screenshot({
      path: `${OUT}/${p.name}-${vp.name}-full.png`,
      fullPage: true,
    });

    // Above-the-fold
    await page.screenshot({
      path: `${OUT}/${p.name}-${vp.name}-fold.png`,
      fullPage: false,
    });
  }
  await ctx.close();
}

await browser.close();
console.log("done");
