import commands from '../support/commands';
import loginData from '../fixtures/loginData.json';

const elements = {
    username: '[data-test=username]',
    password: '[data-test=password]',
    loginButton: '[data-test=login-button]',
    error: '[data-test=error]'
}

class LoginPage {

    visitPage() {
        cy.visit('/')
    }

    login(user,pass) {
        cy.get(elements.username).type(user)
        cy.get(elements.password).type(pass)
        cy.get(elements.loginButton).click();       
    }
    
    validateSuccessfulLogin() {
        cy.url().should('include', '/inventory')
    }


    validateInvalidPassword() {
        cy.validateErrorMessage('Username and password do not match any user in this service')
    }


    loginWithoutUser(pass) {
        cy.get(elements.password).type(pass)
        cy.get(elements.loginButton).click();
        cy.validateErrorMessage('Epic sadface: Username is required')
    }

    loginWithoutPassword(user) {
        cy.get(elements.username).type(user)
        cy.get(elements.loginButton).click();
        cy.validateErrorMessage('Epic sadface: Password is required')
    }

    loginNull() {
        cy.get(elements.loginButton).click();
        cy.validateErrorMessage('Epic sadface: Username is required')
    }

    loginNotRegistered() {
        cy.validateErrorMessage('Epic sadface: Username and password do not match any user in this service')
    }

    lockedUser() {
        cy.validateErrorMessage('Epic sadface: Sorry, this user has been locked out.')
    }

}
export default new LoginPage(); 