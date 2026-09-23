import test, { expect } from "@playwright/test"

test("Leafground Checkbox",async({page})=>{

await test.setTimeout(60000);

await page.goto("https://leafground.com/checkbox.xhtml");

await page.locator("//input[@aria-label='Basic']/parent::div/following-sibling::div[contains(@class,'ui-chkbox-box')]").click();

await page.locator("(//div[@class='ui-helper-hidden-accessible']/following-sibling::div[contains(@class,'ui-chkbox-box')])[2]").click();

expect(page.getByText("Checked")).toBeVisible();

await page.locator("(//span[@class='ui-chkbox-icon ui-icon ui-icon-blank ui-c']/parent::div[contains(@class,'ui-chkbox-box')])[3]").click();

await page.locator("(//div[@class='ui-helper-hidden-accessible']/following::div[contains(@class,'ui-chkbox-box')])[8]").click();

expect (page.getByText("State = 1")).toBeVisible();

await page.locator("[class='ui-toggleswitch ui-widget']").click();

expect(page.getByText("Checked")).toBeVisible();

expect (page.locator("//span[text()='Disabled']/preceding-sibling::div/input")).toBeDisabled();

//expect (page.locator("(//span[@class='ui-chkbox-icon ui-icon ui-icon-blank ui-c']/parent::div[contains(@class,'ui-chkbox-box')])[8]")).toBeDisabled();

await page.locator("[data-label='Cities']").click();

await page.locator("(//li[@data-item-value='Miami']/div/div)[2]").click();

await page.locator("(//li[@data-item-value='Istanbul']/div/div)[2]").click();

await page.locator("(//li[@data-item-value='Brasilia']/div/div)[2]").click();

await page.locator("//a[@aria-label='Close']").click();

await expect(page.locator("//li[@data-item-value='Brasilia']").last()).toBeVisible();

await page.waitForTimeout(5000);

});