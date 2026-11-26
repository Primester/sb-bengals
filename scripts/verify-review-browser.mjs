import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const origin = "http://127.0.0.1:4173";
const routes = [
  "/",
  "/about/",
  "/programs/",
  "/coaches/",
  "/safety/",
  "/sponsors/",
  "/privacy/",
  "/registration/",
];
await mkdir("review-screenshots", { recursive: true });

const browser = await chromium.launch();
try {
  for (const [name, width, height] of [
    ["phone", 390, 844],
    ["desktop", 1440, 1000],
  ]) {
    const page = await browser.newPage({ viewport: { width, height } });
    page.setDefaultTimeout(10_000);
    for (const route of routes) {
      const response = await page.goto(new URL(route, origin).href);
      assert.equal(response.status(), 200, route);
      const heading = page.getByRole("heading", { level: 1 });
      await heading.waitFor();
      await page.evaluate(() => document.fonts.ready);
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth,
      );
      assert.equal(overflow, false, `${route} overflows at ${width}px`);
      const screenshot = route.split("/").filter(Boolean).join("-") || "home";
      await page.screenshot({
        path: `review-screenshots/${name}-${screenshot}.png`,
      });
    }

    await page.goto(origin);
    await page
      .getByRole("heading", {
        name: "One Community. Every Athlete. Every Path.",
      })
      .waitFor();
    await page
      .locator(".hero")
      .getByRole("link", { name: "2027 registration is open", exact: true })
      .click();
    await page.waitForURL(`${origin}/registration/`);
    await page
      .getByRole("heading", { name: "2027 Registration", level: 1 })
      .waitFor();
    assert.equal(
      await page
        .getByRole("button", { name: "Register on PlayMetrics" })
        .isDisabled(),
      true,
    );
    await page
      .locator(".registration-price")
      .getByText("$495", { exact: true })
      .waitFor();
    await page.getByText(/20% off the second child/).waitFor();
    await page.getByText(/25% off each additional child/).waitFor();
    await page.getByText(/two or more teams in each division/).waitFor();
    await page.locator("main").screenshot({
      path: `review-screenshots/${name}-registration-details.png`,
    });
    if (name === "desktop") {
      await page.goto(new URL("/programs/", origin).href);
      await page
        .locator(".announcement")
        .getByRole("link", { name: "2027 registration is open", exact: true })
        .click();
      await page.waitForURL(`${origin}/registration/`);
    }
    await page.goto(origin);
    await page.getByRole("link", { name: "Contact us", exact: true }).click();
    await page.waitForURL("**/#contact");
    assert.equal(
      await page.locator("#contact a").getAttribute("href"),
      "mailto:Vincent@sbbengals.com",
    );

    const menu = page.getByRole("button", { name: "Open navigation" });
    if (name === "phone") await menu.click();
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "About", exact: true })
      .click();
    await page
      .getByRole("heading", { name: "Our Mission", exact: true })
      .waitFor();
    if (name === "phone")
      assert.equal(await menu.getAttribute("aria-expanded"), "false");
    await page.close();
    console.log(
      `Verified ${routes.length} pages and key interactions at ${width}px.`,
    );
  }
} finally {
  await browser.close();
}
