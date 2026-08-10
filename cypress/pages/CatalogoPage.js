const elements = {
    productName: '[data-test=inventory-item-name]',
    productDescription: '[data-test=inventory-item-desc]',
    productPrice: '[data-test=inventory-item-price]',
    backToProducts: '[data-test=back-to-products]',
    sortProducts: '[data-test=product-sort-container]'
}

class CatalogoPage  {
    
    validateProducts() {
        cy.get('.inventory_item')
                .first()
                .within(() => {

                    cy.get('img')
                        .should('be.visible')

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

    productDetails() {
        cy.get('.inventory_item')
                .first()
                .within(() => {
        
                cy.get(elements.productName)
                    .click()
            })

    }

    backToCatalog() {
        cy.get(elements.backToProducts)
            .click()
    }

    productsFilters(filter) {
        cy.get(elements.sortProducts)
            .select(filter)
  
    }

}

export default new CatalogoPage(); 