import { test as base } from '@playwright/test';
import { SauceLogin } from '../pages/SauceDemoLogin';

const test = base.extend({
    loginpage: async ({ page }, use) => {
        const loginpage = new SauceLogin(page);
        await use(loginpage);
    }
});

export { test };
