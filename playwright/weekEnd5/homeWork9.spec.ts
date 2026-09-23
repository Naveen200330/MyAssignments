import test, { expect } from "@playwright/test";

test("Window Handling and Interaction Automation",async({page,context})=>{

    page.on("dialog",async(dia)=>{

        dia.accept();

    })

    await page.goto(" http://leaftaps.com/opentaps/control/login");

    await page.getByRole('textbox',{name:"USERNAME"}).fill("Demosalesmanager");
   
   await page.getByLabel("password").fill("crmsfa");
   
   await page.getByRole("button",{name:"Login"}).click();

   await page.getByText("CRM/SFA").click();

   await page.getByRole("link",{name:"Contacts"}).click();

   await page.locator("//a[text()='Merge Contacts']").click();

   const loadPage=context.waitForEvent("page");

   await page.getByRole("link",{name:"Lookup"}).first().click();

   const page1=await loadPage;

   await page1.waitForLoadState();

   await page1.locator(".linktext").first().click();

   await page.bringToFront();

   await page.locator("[class='buttonDangerous']").click();

   await expect(page).toHaveTitle("Merge Contacts | opentaps CRM");







});