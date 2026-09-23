import { test, expect } from '@playwright/test';

test('test', async ({ page,context }) => {
  test.setTimeout(60000);
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('dell laptops');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  const page1Promise = context.waitForEvent("page");
  await page.locator("//a[@class='a-link-normal s-line-clamp-3 s-link-style a-text-normal']").nth(3).click();
  const page1 = await page1Promise;
  await page1.waitForLoadState();
  await page1.getByRole('button', { name: 'Add to cart' }).click();
  await expect (page1.getByText("Added to cart")).toBeVisible();
  await page1.getByRole('link', { name: 'item in cart' }).click();
  await expect(page1.getByText('Dell 15 (Previously Inspiron) Laptop, 14th Gen Intel Core i3/Core 3 100U Processor, 8GB DDR4, 512')).toBeVisible();
  await expect(page1.getByLabel('Shopping Cart').locator('h3')).toContainText('Dell 15 (Previously Inspiron) Laptop, 14th Gen Intel Core i3/Core 3 100U Processor, 8GB DDR4, 512 SSD, 15.6" FHD 120Hz IPS AG 250 nit Display, Win 11 + Office H&S 2024, Carbon Black, 1.63Kg');
});

//Dell 15 (Previously Inspiron) Laptop, 14th Gen Intel Core i3/Core 3 100U Processor, 8GB DDR4, 512 SSD, 15.6" FHD 120Hz IPS AG 250 nit Display, Win 11 + Office H&S 2024, Carbon Black, 1.63Kg
