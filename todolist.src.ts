import { test } from 'todolist.src.ts';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.goto('https://gor-pathology.web.app/');
  
  await page.getByRole('textbox', { name: 'TODO' }).click();
  await page.getByRole('textbox', { name: 'TODO' }).fill('Sagar');
  
  await page.getByRole('button', { name: 'add Save' }).click();
});