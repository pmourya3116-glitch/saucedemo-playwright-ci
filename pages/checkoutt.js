class checkout
{
    constructor(page)
    {
        this.page = page;

        this.checkoutBtn = page.getByText('Checkout');
        this.firstname = page.getByPlaceholder('First Name');
        this.lastname = page.getByPlaceholder('Last Name');
        this.pincode = page.getByPlaceholder('Zip/Postal Code');
        this.Continuebtn = page.getByRole('button', {
    name: 'Continue'
});

       this.Finish = page.getByRole('button', {
    name: 'Finish'
});

    }

    async checkoutt()
    {
        await this.checkoutBtn.click();
    }

    async details(firstname,lastname,pincode)
    {
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.pincode.fill(pincode);
    }

    async checkoutprocess()
    {
        await this.Continuebtn.click();
        await this.Finish.click();
    }
}

module.exports = {checkout};