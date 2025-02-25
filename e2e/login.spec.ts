import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://try.vikunja.io/login');
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.fill('input[name="username"]', 'demo');
    await page.fill('input[name="password"]', 'demo');
    await page.click('button[type="button"]:has-text("LOGIN")');
    await expect(page.locator('text=Current Tasks')).toBeVisible();
  });

  test('should show error with invalid password', async ({ page }) => {
    await page.fill('input[name="username"]', 'demo');
    await page.fill('input[name="password"]', 'nedemo');
    await page.click('button[type="button"]:has-text("LOGIN")');
    await expect(page.locator('text=Wrong username or password.')).toBeVisible();
  });

  test('should show error if fields are empty', async ({ page }) => {
    await page.click('button[type="button"]:has-text("LOGIN")');
    await expect(page.locator('text=Please provide a username.')).toBeVisible();
    await expect(page.locator('text=Please provide a password.')).toBeVisible();
  });

  test('should show error if password is empty', async ({ page }) => {
    await page.fill('input[name="username"]', 'demo');
    await page.click('button[type="button"]:has-text("LOGIN")');
    await expect(page.locator('text=Please provide a password.')).toBeVisible();
  });

  test('should show error if username is empty', async ({ page }) => {
    await page.fill('input[name="password"]', 'demo');
    await page.click('button[type="button"]:has-text("LOGIN")');
    await expect(page.locator('text=Please provide a username.')).toBeVisible();
  });
});
