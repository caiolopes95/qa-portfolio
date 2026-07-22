Cypress.Commands.add("visitUrl", () => {
  cy.visit("/");
});

Cypress.Commands.add('validateErrorMessage', (message) => {
        cy.get('[data-test=error]')
          .should('contain', message)
    }
)

Cypress.Commands.add('validateSortAsc', (locator) => {
    cy.get(locator).then(($elements) => {

        const valores = [...$elements].map(el =>
            Number(el.innerText.replace(/[^\d,.-]/g, ''))
        );
        const ordenada = [...valores].sort((a,b) => a-b);
        expect(valores).to.deep.equal(ordenada);
    });

});

Cypress.Commands.add('validateSortDesc', (locator) => {

    cy.get(locator).then(($elements) => {

        const valores = [...$elements].map(el =>
            Number(el.innerText.replace(/[^\d.-]/g, ''))
        );

        const ordenada = [...valores].sort((a, b) => b-a);

        expect(valores).to.deep.equal(ordenada);

    });

});

Cypress.Commands.add('validateSortAscText', (locator) => {
    cy.get(locator).then(($elements) => {

        const valores = [...$elements].map(el =>
            el.innerText.trim()
        );

        const ordenada = [...valores].sort((a, b) =>
            a.localeCompare(b)
        );

        expect(valores).to.deep.equal(ordenada);
    });    
});

Cypress.Commands.add('validateSortDescText', (locator) => {
    cy.get(locator).then(($elements) => {

        const valores = [...$elements].map(el =>
            el.innerText.trim()
        );

        const ordenada = [...valores].sort((a, b) =>
            b.localeCompare(a)
        );

        expect(valores).to.deep.equal(ordenada);

    });
});
