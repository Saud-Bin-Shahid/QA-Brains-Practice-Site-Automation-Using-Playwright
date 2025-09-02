// pages/LoginPage.js
import { expect } from '@playwright/test';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Email*' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password*' });
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  //  this.successMsg = page.getByText('credentials matched:');
  }

  async goto() {
    await this.page.goto('https://practice.qabrains.com/ecommerce/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.page.waitForTimeout(1000);
    await this.loginBtn.click();
    // await expect(this.successMsg).toBeVisible();
  }
}

export default LoginPage;
