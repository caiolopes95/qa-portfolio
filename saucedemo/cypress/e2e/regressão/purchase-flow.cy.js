import loginData from '../../fixtures/loginData.json';
import LoginPage from '../../pages/LoginPage';
import CatalogoPage from '../../pages/CatalogoPage';
import CarrinhoPage from '../../pages/CarrinhoPage';
import CheckoutPage from '../../pages/CheckoutPage';
import commands from '../../support/commands';

describe('Fluxo E2E - Compra Completa', () => {

    it('REG-001 - Realizar uma compra com sucesso', () => {

        // Login
        LoginPage.visitPage()
        LoginPage.login(
            loginData.validUser.username,
            loginData.passwords.valid
        )

        // Adiciona produto
        CarrinhoPage.addToCartFromList()

        // Carrinho
        CarrinhoPage.goToCart()

        // Checkout
        CheckoutPage.accessCheckout()

        // Informações
        CheckoutPage.typeFirstName('Caio')
        CheckoutPage.typeLastName('Lopes')
        CheckoutPage.typePostalcode('12345-123')
        CheckoutPage.clickContinue()

        // Overview
        CheckoutPage.finishCheckout()

        // Sucesso
        cy.contains('Thank you for your order!')
            .should('be.visible')

        // Volta para Home
        CheckoutPage.backhome()

        // Valida retorno ao catálogo
        cy.url()
            .should('include', '/inventory.html')
    })

})