import {test, chromium,expect } from "@playwright/test"

test ("Edit Individuals",async()=>{

    test.setTimeout(60000);

    const context=await chromium.launchPersistentContext(

        "./salesforce-profile",
        {

        headless:false

    }
)
    const page =await context.newPage();

 await page.goto("https://orgfarm-fb3df6e668-dev-ed.develop.my.salesforce.com/");

 
await page.getByRole('textbox',{name: "Username"}).fill("amnaveen2003.83cd90bae47f@agentforce.com");

await page.getByRole('button',{name: "Log In"}).click();

await page.getByRole('textbox',{name:"Password"}).fill("Navsway@0@0");

await page.getByRole('button',{name: "Log In"}).click();

await page.locator("//button[@title='App Launcher']").click();

await page.getByRole("button",{name:'View All Applications'}).click();

await page.locator("//a[@data-label='Individuals']").click();

await page.getByPlaceholder("Search this list...").fill("kalmas1");

await page.getByPlaceholder("Search this list...").press("Enter");

await page.locator("(//span[@class='slds-grid slds-grid_align-spread'])[7]").click();

const edit=await page.locator("//li[@class='slds-dropdown__item uiMenuItem']/a[@title='Edit']");

await expect(edit).toBeVisible();

await edit.click();

await page.getByRole("button",{name:'Salutation Mr.'}).click();

//await page.getByRole("option",{name:'Mr.'}).click();

const mrOption = page.getByRole("option", { name: "Mr." });

await expect(mrOption).toBeVisible();

await mrOption.click();

await page.getByPlaceholder("First Name").fill("NASA");

await page.waitForTimeout(5000);

await page.locator("(//button[@title='Save'])[2]").click();

await expect(page.locator(".toastMessage").filter({ hasText: "NASA" })).toBeVisible();

});