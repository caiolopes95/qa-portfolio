const elements = {
    checkout: '[data-test=checkout]',
    firstName: '[data-test=firstName]',
    lastName: '[data-test=lastName]',
    postalcode: '[data-test=postalCode]',
    buttonContinue: '[data-test=continue]',
    cancel: '[data-test=cancel]',
    productName: '[data-test=inventory-item-name]',
    productDescription: '[data-test=inventory-item-desc]',
    productPrice: '[data-test=inventory-item-price]',
    taxLable: '[data-test=tax-label]',
    totalLable: '[data-test=total-label]',
    finish: '[data-test=finish]',
    home: '[data-test="back-to-products"]'
}

class CheckoutPage {

    accessCheckout() {
        cy.get(elements.checkout).click()
    }

    typeFirstName(name) {
        cy.get(elements.firstName).type(name)
    }

    typeLastName(last) {
        cy.get(elements.lastName).type(last)
    }
    
    typePostalcode(code) {
        cy.get(elements.postalcode).type(code)
    }    

    clickContinue() {
       cy.get(elements.buttonContinue).click() 
    }

    cancelCheckout() {
       cy.get(elements.cancel).click() 
    }

    goToOverviewPage () {
        cy.get(elements.checkout).click()
        cy.get(elements.firstName).type('Caio')
        cy.get(elements.lastName).type('Lopes')
        cy.get(elements.postalcode).type('12345-123')
        cy.get(elements.buttonContinue).click() 
    }

    
    validateCheckoutInfos() {
        cy.get(elements.productName)
            .should('have.text', 'Sauce Labs Backpack')

        cy.get(elements.productDescription)
            .should('contain', 'carry.allTheThings() with the sleek')

        cy.get(elements.productPrice)
            .should('have.text', '$29.99')

        cy.get(elements.taxLable)
            .should('contain', '$2.40')   
            
        cy.get(elements.totalLable)
            .should('contain', '$32.39')   
    }

    finishCheckout() {
        cy.get(elements.finish).click()
    }

    backhome() {
        cy.get(elements.home).click()
    }

}

export default new CheckoutPage
