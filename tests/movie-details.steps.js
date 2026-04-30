import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I am browsing the movies application', async ({ page }) => {
  await page.goto('http://localhost:5000'); // Update with your application URL
});

When('I select a movie from the list', async ({ page }) => {
  await page.getByRole('link', { name: /James Bond/i }).first().click();
});

Then('the movie details page is displayed', async ({ page }) => {
  await expect(page).toHaveURL(/\/movie\/.+/);
});

Then('I see the movie title as a heading', async ({ page }) => {
  const title = page.locator('h2');
  await expect(title).toBeVisible();
});

Then('I see the release date', async ({ page }) => {
  const releaseDate = page.locator('[data-testid="release-date"]');
  await expect(releaseDate).toBeVisible();
});

Given('I am on the movie details page for a movie with a release date', async ({ page }) => {
  await page.goto('http://localhost:5000/movie/1'); // Update with your application URL
});

Then('the release date is formatted as {string}', async ({ page }, format) => {
  // AC1: Matches format like "January 15, 2024"
  const releaseDate = page.locator('[data-testid="release-date"]');
  await expect(releaseDate).toHaveText(/^\w+ \d{1,2}, \d{4}$/);
});

Given('I am on the movie details page for a movie without a release date', async ({ page }) => {
  await page.goto('http://localhost:5000/movie/2'); // Movie without release date - update as needed
});

Then('I see the message {string}', async ({ page }, message) => {
  // AC2: Handle missing release date
  const element = page.locator(`text=${message}`);
  await expect(element).toBeVisible();
});

Given('I am on a movie details page', async ({ page }) => {
  await page.goto('http://localhost:5000/movie/1'); // Update with your application URL
});

When('I click the back button', async ({ page }) => {
  // AC4: Back button to return to movie list
  await page.getByRole('button', { name: /back/i }).click();
});

Then('I return to the movie list', async ({ page }) => {
  await expect(page).toHaveURL(/\/movies|\/$/); // Update with your movies list URL
});

Given('I try to access a movie that does not exist', async ({ page }) => {
  await page.goto('http://localhost:5000/movie/99999', { waitUntil: 'networkidle' });
});

Then('I see an error message {string}', async ({ page }, message) => {
  // AC5: Error message for movie not found
  const errorMessage = page.locator(`text=${message}`);
  await expect(errorMessage).toBeVisible();
});
