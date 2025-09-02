// pages/FavoritesPage.js
import { expect } from '@playwright/test';

class FavoritesPage {
  constructor(page) {
    this.page = page;
    this.sampleShirtFavBtn = page.locator('div').filter({ hasText: /^Sample Shirt NameA sample description for the product\.\$49\.99Add to cart$/ }).getByRole('button').nth(1);

    this.sampleShoeFavBtn = page.locator('div').filter({ hasText: /^Sample Shoe NameA sample description for the product\.\$89\.00Add to cart$/ }).getByRole('button').nth(1);

    this.profileBtn = page.getByRole('button', { name: 'student' });
    this.favoritesMenu = page.getByRole('menuitem', { name: 'Favorites' });
    this.favoritesHeading = page.getByRole('heading', { name: 'Favorites' });
  }

  async addToFavorites() {
    await this.page.waitForTimeout(1000);
    await this.sampleShoeFavBtn.click();
    await this.page.waitForTimeout(1000);
    await this.sampleShirtFavBtn.click();
    
  }

  async openFavorites() {
    await this.profileBtn.click();
    await this.favoritesMenu.click();
    await expect(this.favoritesHeading).toBeVisible();
    await this.page.waitForTimeout(2000);
  }
}

export default FavoritesPage;
