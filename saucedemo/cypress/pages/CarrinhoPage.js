const elements = {
    seeCart: '[data-test=shopping-cart-link]',
    productName: '[data-test=inventory-item-name]',
    productDescription: '[data-test=inventory-item-desc]',
    productPrice: '[data-test=inventory-item-price]',
    deleteItem: '[data-test="remove-sauce-labs-backpack"]',
    addToCart: '[data-test=add-to-cart]',
    removeItem: '[data-test=remove]',
    continueShopping: '[data-test=continue-shopping]'
    
}

class CarrinhoPage  {

    addToCartFromList() {    
        cy.get('.inventory_item')
            .first()
            .within(() => {
                cy.contains('Add to cart')
                    .click();
            });
    }


    goToCart() {
        cy.get(elements.seeCart).click()
    }


    validateCartItems() {
        cy.get('.cart_item')
        .first()
        .within(() => {
                cy.get(elements.productName)
                    .invoke('text')
                    .should('not.be.empty')

                cy.get(elements.productDescription)
                    .invoke('text')
                    .should('not.be.empty')

                cy.get(elements.productPrice)
                    .should('be.visible')
                })
    }


    deleteItem() {
        cy.get(elements.deleteItem).click()
    }


    accessDetails() {
        cy.get('.inventory_item')
            .first()
            .within(() => {
                cy.contains('Sauce')
                    .click();
            });        
    }


    addToCartFromDetails() {
        cy.get(elements.addToCart).click()
    }


    deleteItemFromDetails() {
        cy.get(elements.removeItem).click()
    }

    continueShopping() {
        cy.get(elements.continueShopping).click()
    }


    

}

export default new CarrinhoPage(); 