import test from "@playwright/test";
import path from "path";

test("File Upload Using File Chooser Event",async({page})=>{

    await page.goto("https://blazorise.com/docs/components/file-picker");

    const upload=page.waitForEvent("filechooser");

    await page.locator("//span[text()='Choose files']").first().click();

    const fileUpload=await upload;

    fileUpload.setFiles(path.join(__dirname,"Image/testleaf_logo.png"));

    //await page.locator("[class='btn btn-primary disabled b-file-picker-file-upload']").click();

    //await page.waitForTimeout(8000);

});