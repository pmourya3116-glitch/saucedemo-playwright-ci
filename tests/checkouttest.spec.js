import { expect } from '@playwright/test';
import { test } from '../fixtures/LoginFixture';
import { checkout } from '../pages/checkoutt';
import { Product } from '../pages/Product';

test('Finish the Order', async ({ page, loginpage }) => {
    await page.goto('https://www.saucedemo.com/');
    await loginpage.Login('standard_user', 'secret_sauce');

    const prod = new Product(page);
    await prod.productt();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    await prod.OpenCart();
    await expect(page.getByLabel('View details for Sauce Labs Backpack')).toHaveText('Sauce Labs Backpack');

    const check = new checkout(page);
    await check.checkoutt();

    await check.details('Priyanjal', 'mourya', '480441');
    await expect(check.firstname).toHaveValue('Priyanjal');
    await expect(check.lastname).toHaveValue('mourya');
    await expect(check.pincode).toHaveValue('480441');

    await check.checkoutprocess();

    await expect(page.getByText('Thank you for your order!')).toBeVisible();



})