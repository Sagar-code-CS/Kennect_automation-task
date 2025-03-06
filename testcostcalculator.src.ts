import { test } from 'testcostcalculator';

test('test', async ({ page1 }) => {
  await page1.goto('https://demo.playwright.dev/todomvc/#/');
  await page1.goto('https://gor-pathology.web.app/');
  
  await page1.getByRole('textbox', { name: 'Add tests for patient' }).click();
  await page1.getByText('UR URIC ACID').click();
  await page1.getByRole('textbox', { name: 'Add tests for patient' }).click();
  await page1.getByText('GD 1.6 CardicM, Vit, Arthrit,').click();
  await page1.getByRole('textbox', { name: 'Add tests for patient' }).click();
  await page1.getByRole('option', { name: 'xyz 2000₹' }).getByRole('checkbox').check();
  await page1.getByText('4207.5 ₹').click();
});