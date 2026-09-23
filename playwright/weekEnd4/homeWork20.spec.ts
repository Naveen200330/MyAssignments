import {test,chromium, expect} from "@playwright/test"

test("login to saleforce",async({})=>{

    test.setTimeout(60000);

    const context = await chromium.launchPersistentContext(
        "./salesforce-profile",
        {
            headless: false
        }
    );
const page = await context.newPage();


await page.goto("https://login.salesforce.com");

await page.getByRole('textbox',{name: "Username"}).fill("username@gmail.com");

await page.getByRole('button',{name: "Log In"}).click();

await page.getByRole('textbox',{name:"Password"}).fill("password");

await page.getByRole('button',{name: "Log In"}).click();

// await page.pause();

// await page.getByRole('button',{name:"Verify"}).click();

// await page.locator("//lightning-button-icon[@class='close slds-popover__close']").click();


await page.locator("(//span[@class='slds-grid slds-media_center slds-grid_align-center appItemImage'])[4]").click();

await page.locator("//div[@title='New']").click();

await page.getByRole("combobox",{name:'Salutation'}).click();

//await page.getByRole("option",{name:'Mr.'}).click();

const mrOption = page.getByRole("option", { name: "Mr." });

await expect(mrOption).toBeVisible();

await mrOption.click();

await page.getByPlaceholder("First Name").fill("mnc");

await page.getByPlaceholder("Last Name").fill("Test");

await page.getByRole("textbox",{name:'Company'}).fill("ABC Company")

await page.locator("//button[@name='SaveEdit']").click();

expect(page.getByText("mnc Test")).toBeVisible();

await page.waitForTimeout(5000);

});

