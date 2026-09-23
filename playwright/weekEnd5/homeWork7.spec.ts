import test from "@playwright/test";
import path from "path";

test ("File Upload Using setInputFiles()",async({page})=>{

    await page.goto("https://demoqa.com/upload-download");

    await page.locator("#uploadFile").setInputFiles(path.join(__dirname,"Image/testleaf_logo.png"));

    await page.waitForTimeout(5000);

    });