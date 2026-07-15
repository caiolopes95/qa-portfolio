const elements = {
    username: '[data-test=username]',
    password: '[data-test=password]',
    loginButton: '[data-test=login-button]',
    error: '[data-test=error]'
}

class LoginPage {

    visitPage() {
        cy.visit('https://www.saucedemo.com/'); 
    }

    loginSuccessful(user,pass) {
        cy.get(elements.username).type(user)
        cy.get(elements.password).type(pass)
        cy.get(elements.loginButton).click();
    }
    
    validateSuccessfulLogin() {
        cy.url().should('include', '/inventory')
    }

    invalidPassword(user,pass) {
        cy.get(elements.username).type(user)
        cy.get(elements.password).type(pass)
        cy.get(elements.loginButton).click();
    }

    validateInvalidPassword() {
        cy.get(elements.error)
        .should('contain', 'Username and password do not match any user in this service')
    }

}

export default new LoginPage(); 