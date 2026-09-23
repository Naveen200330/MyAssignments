import test from "@playwright/test";
import path from "path";

test ("File Upload Using setInputFiles()",async({page})=>{

    await page.goto("https://demoqa.com/upload-download");

    const download= page.waitForEvent("download");

    await page.locator("#downloadButton").click();

    const downloadFile=  await download;

    await downloadFile.saveAs(path.join(__dirname,"downloadImages/image1.png"));

    await downloadFile.saveAs(path.join(__dirname,`downloadImages/${downloadFile.suggestedFilename()}`));

    

});