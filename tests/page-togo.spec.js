const { test, describe, expect } = require('@playwright/test');

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('ivysaur')).toBeVisible();
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible();
  });

  test('can navigate to a particular Pokemon page', async ({ page }) => {
    console.log('Navigating to the main page');
    await page.goto('/');

    console.log('Clicking on Ivysaur link');
    await page.click('text=ivysaur');

    console.log("Ensuring navigation to Ivysaur's page");
    await expect(page).toHaveURL(/.*ivysaur/);

    console.log("Checking for specific content on Ivysaur's page");
    await expect(page.getByText('chlorophyll')).toBeVisible();
  });
});
