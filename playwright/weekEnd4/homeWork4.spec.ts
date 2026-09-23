import test, { expect } from "@playwright/test"

test("Leafground Dropdown",async({page})=>{

   await page.goto(" https://leafground.com/select.xhtml");

   await page.locator("[class='ui-selectonemenu']").selectOption({label:"Playwright"});

   const value=  await page.locator("[class='ui-selectonemenu'] option");

   const count=value.count();

   console.log(await count);

   for (let i=0;i<await count;i++){
       
    console.log(await value.nth(i).textContent());

   }

   await page.locator("(//div[@role='combobox'])[1]").click();

   await page.getByText("India", { exact: true }).nth(1).click();

   await page.locator("(//div[@role='combobox'])[2]").click();

   expect (page.getByText("Chennai", { exact: true }).nth(1)).toBeVisible();
   
   await page.getByText("Chennai", { exact: true }).nth(1).click();

   await page.getByRole("button",{name:"Show Options"}).click();

   await page.locator("[data-item-label='Selenium WebDriver']").click();
      
   await page.getByRole("button",{name:"Show Options"}).click();
    
   await page.locator("[data-item-label='Playwright']").click();
   
   await page.getByRole("button",{name:"Show Options"}).click();

   await page.locator("[data-item-label='PostMan']").click();

   await page.locator("(//div[@role='combobox'])[3]").click();

   await page.getByText("Tamil", { exact: true }).nth(1).click();

   const value1=  await page.locator("[id='j_idt87:lang_input'] option");

   const count1=value1.count();

   console.log(await count1);

   for (let j=0;j<await count1;j++){
       
    console.log(await value1.nth(j).textContent());

   }
   
   await page.locator("(//div[@role='combobox'])[4]").click();

   expect (page.getByText("இரண்டு", { exact: true }).nth(1)).toBeVisible();

   await page.getByText("இரண்டு", { exact: true }).nth(1).click();
    
   await page.waitForTimeout(5000);



});