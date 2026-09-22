class Product {

    constructor(page)
    {
        this.page = page;
        
        this.productTitle = page.getByText('Sauce Labs Backpack');
        this.AddToCartbtn = page.getByRole('button', {
            name : 'Add to cart'}).nth(0);
    }

    async productt()
    {
        await this.AddToCartbtn.click();
    }
    async OpenCart()
    {
        await this.page.locator('.shopping_cart_badge').click();
    }
}

module.exports = { Product };