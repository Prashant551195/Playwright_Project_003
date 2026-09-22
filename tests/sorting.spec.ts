import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
});

test('sort products low to high', async ({ page }) => {
  await page.selectOption('[data-test="product-sort-container"]', 'lohi');
  const prices = await page.locator('.inventory_item_price').allTextContents();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
  const sorted = [...numericPrices].sort((a, b) => a - b);
  expect(numericPrices).toEqual(sorted);
});

test('sort products high to low', async ({ page }) => {
  await page.selectOption('[data-test="product-sort-container"]', 'hilo');
  const prices = await page.locator('.inventory_item_price').allTextContents();
  const numericPrices = prices.map(p => parseFloat(p.replace('$', '')));
  const sorted = [...numericPrices].sort((a, b) => b - a);
  expect(numericPrices).toEqual(sorted);
});

test('sort products by name A to Z', async ({ page }) => {
  await page.selectOption('[data-test="product-sort-container"]', 'az');
  const names = await page.locator('.inventory_item_name').allTextContents();
  const sorted = [...names].sort();
  expect(names).toEqual(sorted);
});