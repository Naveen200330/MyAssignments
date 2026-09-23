import test from "@playwright/test"

test("",async({page})=>{

   await page.goto("https://leaftaps.com/opentaps/control/main");

   await page.getByRole('textbox',{name:"USERNAME"}).fill("Demosalesmanager");
   
   await page.getByLabel("password").fill("crmsfa");
   
   await page.getByRole("button",{name:"Login"}).click();

   await page.getByText("CRM/SFA").click();

   await page.getByRole('link',{name:"Leads"}).click();

   await page.locator("//ul[@class='shortcuts']/li[2]/a").click();

   await page.locator("#createLeadForm_companyName").fill("Company1");

   await page.locator("//input[@id='createLeadForm_firstName']").fill("Naveen");

   await page.locator("//input[@id='createLeadForm_lastName']").fill("A M");
      
   await page.locator("#createLeadForm_personalTitle").fill("Hello Team");

   await page.locator("#createLeadForm_generalProfTitle").fill("Software Tester");

   await page.locator("#createLeadForm_annualRevenue").fill("3,50,000");  
   
   await page.locator("#createLeadForm_departmentName").fill("Automation");  

   await page.locator("#createLeadForm_primaryPhoneNumber").fill("976306021");  

   await page.locator(".smallSubmit").click();

   await page.waitForTimeout(5000);
   

});