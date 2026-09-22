export class SauceLogin {

    constructor(page) {
        this.page = page;

        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.login = page.getByRole('button', { name: 'Login' });
    }

    async Login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login.click();
    }
}
