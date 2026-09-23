import { expect } from "@playwright/test";
import test from "@playwright/test"

test("Leafground Radio Button",async({page})=>{


   await page.goto(" https://leafground.com/radio.xhtml");

   expect (page.locator("//label[text()='Safari']").last()).toBeChecked();

   expect (page.locator(" //label[text()='21-40 Years']").last()).toBeChecked()

   expect (page.locator("//div[@class='ui-radiobutton ui-widget']/following-sibling::label[text()='Chrome']").last()).toBeEnabled();

   await page.locator("//div[@class='ui-radiobutton ui-widget']/following-sibling::label[text()='Chrome']").first().click();

   await page.locator("//label[text()='Chennai']").click();

   await page.waitForTimeout(5000);


});