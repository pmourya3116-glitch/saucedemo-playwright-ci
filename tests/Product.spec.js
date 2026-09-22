import { expect } from '@playwright/test';
import {test} from '../fixtures/LoginFixture';
import {Product} from '../pages/Product';



test('Product Add to cart ', async({page,loginpage})=>
{
     await page.goto('https://www.saucedemo.com/');
     await loginpage.Login('standard_user','secret_sauce');

     const prod = new Product(page);
     await prod.productt();

     await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
     
     await prod.OpenCart();
     await expect(page.getByLabel('View details for Sauce Labs Backpack')).toHaveText('Sauce Labs Backpack');


})