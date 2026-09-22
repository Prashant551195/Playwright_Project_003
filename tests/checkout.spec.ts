import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
});

test('complete full checkout flow', async ({ page }) => {
  // Add two items to cart
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

  // Go to cart
  await page.click('.shopping_cart_link');
  await expect(page.locator('.cart_item')).toHaveCount(2);

  // Checkout
  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.click('[data-test="continue"]');

  // Confirm order summary shows and finish
  await expect(page.locator('.summary_info')).toBeVisible();
  await page.click('[data-test="finish"]');

  // Confirm success message
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});

test('cannot checkout with empty cart', async ({ page }) => {
  await page.click('.shopping_cart_link');
  await expect(page.locator('.cart_item')).toHaveCount(0);
});

test('checkout fails with missing info', async ({ page }) => {
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');
  await page.click('[data-test="continue"]'); // no fields filled
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});