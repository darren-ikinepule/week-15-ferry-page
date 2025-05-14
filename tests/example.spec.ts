import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveTitle("Api Projects");
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

  //check for the presence of the button
  test('has button', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // This test checks if the button with the name "Create Post" is present on the page.
  await page.getByRole('button', { name: 'Create Post' }).click();

  // Expects page to have a Button with the name of Create Post.
  await expect(page.getByRole('button', { name: 'Create Post' })).toBeVisible();
});


  //check for the presence of the h1 heading
  test('has h1 heading', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // This test checks if the h1 with the name "Create Post" is present on the page.
  await page.getByRole('heading', { name: 'Task 2: POST Request Assessment' }).click();

  // Expects page to have a h1 with the name of Create Post.
  await expect(page.getByRole('heading', { name: 'Task 2: POST Request Assessment' })).toBeVisible();
});

//test for catch error
test('catch error', async ({ page }) => {
  await page.goto('http://localhost:5173/');
})
  



  




  