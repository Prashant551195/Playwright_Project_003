import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory/);
});

test('failed login shows error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'wrong_user');
  await page.fill('#password', 'wrong_pass');
  await page.click('#login-button');
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('add item to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('.inventory_item >> nth=0 >> button');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});