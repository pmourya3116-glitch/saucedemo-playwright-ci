import {test} from '../fixtures/LoginFixture';
test('Sauce Login',async({page,loginpage})=>{

    await page.goto('https://www.saucedemo.com/');

    await loginpage.Login('standard_user','secret_sauce');

});