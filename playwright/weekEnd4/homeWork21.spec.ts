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

await page.locator("(//div[@class='forceVirtualActionMarker forceVirtualAction'])[1]").click();

const edit=await page.locator("//li[@class='slds-dropdown__item uiMenuItem']/a[@title='Edit']");

await expect(edit).toBeVisible();

await edit.click();

await page.getByRole("combobox",{name:'Salutation'}).click();

const mrOption = page.getByRole("option", { name: "Dr." });

await expect(mrOption).toBeVisible();

await mrOption.click();

await page.getByPlaceholder("Last Name").fill("best");

await page.getByRole("textbox",{name:'Company'}).fill("CBA Company")

await page.locator("//button[@name='SaveEdit']").click();

expect(page.getByText("Dr. mnc best")).toBeVisible();

await page.waitForTimeout(5000);


});

