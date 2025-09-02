// tests/EcommerceFlow.spec.js
import { test } from '@playwright/test';
import LoginPage from '../Pages/LoginPage';
import FavoritesPage from '../Pages/FavoritesPage';
import CheckoutPage from '../Pages/CheckoutPage';

test('E2E Ecommerce Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const favoritesPage = new FavoritesPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('student@qabrains.com', 'Password123');

  await favoritesPage.addToFavorites();
  await favoritesPage.openFavorites();

  await checkoutPage.addProductsToCart();
  await checkoutPage.proceedToCheckout('Jhon Wick', '1400');
});
