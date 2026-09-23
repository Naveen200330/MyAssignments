import {test, chromium,expect } from "@playwright/test"

test ("Create Individuals",async()=>{

    test.setTimeout(60000);

    const context=await chromium.launchPersistentContext(

        "./salesforce-profile",
        {

        headless:false

    }
)
    const page =await context.newPage();

 await page.goto("https://orgfarm-fb3df6e668-dev-ed.develop.my.salesforce.com/");

 
await page.getByRole('textbox',{name: "Username"}).fill("username@agentforce.com");

await page.getByRole('button',{name: "Log In"}).click();

await page.getByRole('textbox',{name:"Password"}).fill("password");

await page.getByRole('button',{name: "Log In"}).click();

await page.locator("//button[@title='App Launcher']").click();

await page.getByRole("button",{name:'View All Applications'}).click();

await page.locator("//a[@data-label='Individuals']").click();

await page.locator("//div[@title='New']").click();

await page.getByRole("button",{name:'Salutation --None--'}).click();

//await page.getByRole("option",{name:'Mr.'}).click();

const mrOption = page.getByRole("option", { name: "Mr." });

await expect(mrOption).toBeVisible();

await mrOption.click();

await page.getByPlaceholder("Last Name").fill("kalmas1");

await page.locator("(//button[@title='Save'])[2]").click();

await expect(page.locator(".toastMessage").filter({ hasText: "kalmas1" })).toBeVisible();

await page.waitForTimeout(5000);

});
