// pages/CheckoutPage.js
import { expect } from '@playwright/test';

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.logoLink = page.getByRole('link', { name: 'logo (Practice Site)' });
    this.shirtCartBtn = page.locator('div').filter({ hasText: /^\$49\.99Add to cart$/ }).getByRole('button');

    this.jacketCartBtn = page.locator('div').filter({ hasText: /^\$129\.50Add to cart$/ }).getByRole('button');

    this.cartBtn = page.getByRole('button', { name: '2' });
    this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });

    this.nameInput = page.getByRole('textbox', { name: 'Ex. Doe' });
    this.zipInput = page.locator('div').filter({ hasText: /^Zip Code$/ }).getByRole('textbox');

    this.continueBtn = page.getByRole('button', { name: 'Continue' });
    this.finishBtn = page.getByRole('button', { name: 'Finish' });
    this.successHeading = page.getByRole('heading', { name: 'Thank you for your order!' });
  }

  async addProductsToCart() {
    await this.logoLink.click();
    await this.page.waitForTimeout(2000);
    await this.shirtCartBtn.click();
    await this.page.waitForTimeout(2000);
    await this.jacketCartBtn.click();
    await this.page.waitForTimeout(2000);
  }

  async proceedToCheckout(name, zip) {
    await this.cartBtn.click();
    await this.page.waitForTimeout(2000);
    await this.checkoutBtn.click();
    await this.page.waitForTimeout(2000);

    await this.nameInput.fill(name);
    await this.zipInput.fill(zip);
    await this.page.waitForTimeout(2000);

    await this.continueBtn.click();
    await this.finishBtn.click();

    await expect(this.successHeading).toBeVisible();
    await this.page.waitForTimeout(1000);
  }
}

export default CheckoutPage;
