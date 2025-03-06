import { test } from 'login';

test('test', async ({ page1 }) => {
  await page1.goto('https://demo.playwright.dev/todomvc/#/');
  await page1.goto('https://gor-pathology.web.app/');
  await page1.locator('input[name="email"]').click();
  await page1.locator('input[name="email"]').fill('test@kennect.io');
  
  await page1.locator('input[name="password"]').fill(' Qwerty@1234');
  await page1.locator('input[name="password"]').click();
  await page1.getByRole('button', { name: 'Login', exact: true }).click();
  await page1.locator('input[name="password"]').click();
  await page1.locator('input[name="password"]').fill('Qwerty@1234');
  await page1.getByRole('button', { name: 'Login', exact: true }).click();
});