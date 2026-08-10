import LoginPage from '../pages/LoginPage';
import loginData from '../fixtures/loginData.json';
import CarrinhoPage from '../pages/CarrinhoPage';
import CheckoutPage from '../pages/CheckoutPage';
import commands from '../support/commands';
import checkoutData from '../fixtures/checkoutData.json';


describe('Catálogo de Produtos', () => {

   beforeEach(() => {
        cy.login()
        CarrinhoPage.addToCartFromList()
        CarrinhoPage.goToCart()
   })

   
    it('TC-CHK-001 - Iniciar o checkout com produto no carrinho', () => {
        CheckoutPage.accessCheckout()

        cy.url().should('include', '/checkout-step-one.html')
    })  

   
    it('TC-CHK-002 - Finalizar o checkout com dados válidos', () => {
        CheckoutPage.accessCheckout()
        CheckoutPage.typeFirstName(checkoutData.validCustomer.firstName)
        CheckoutPage.typeLastName(checkoutData.validCustomer.lastName)
        CheckoutPage.typePostalcode(checkoutData.validCustomer.postalcode)
        CheckoutPage.clickContinue()

        cy.url().should('include', '/checkout-step-two.html')    
    })  
    
    
    it('TC-CHK-003 - Validar obrigatoriedade do campo First Name', () => {
        CheckoutPage.accessCheckout()
        CheckoutPage.typeLastName(checkoutData.validCustomer.lastName)
        CheckoutPage.typePostalcode(checkoutData.validCustomer.postalcode)
        CheckoutPage.clickContinue()

        cy.validateErrorMessage('Error: First Name is required')    
    })  
  
    
    it('TC-CHK-004 - Validar obrigatoriedade do campo Last Name', () => {
        CheckoutPage.accessCheckout()
        CheckoutPage.typeFirstName(checkoutData.validCustomer.firstName)
        CheckoutPage.typePostalcode(checkoutData.validCustomer.postalcode)
        CheckoutPage.clickContinue()
        
        cy.validateErrorMessage('Error: Last Name is required')       
    
    })      
    
    it('TC-CHK-005 - Validar obrigatoriedade do campo Postal Code', () => {
        CheckoutPage.accessCheckout()
        CheckoutPage.typeFirstName(checkoutData.validCustomer.firstName)
        CheckoutPage.typeLastName(checkoutData.validCustomer.lastName)
        CheckoutPage.clickContinue()
        
        cy.validateErrorMessage('Error: Postal Code is required')  
    })    

        
    it('TC-CHK-006 - Cancelar o checkout na etapa de informações', () => {
        CheckoutPage.accessCheckout()
        CheckoutPage.cancelCheckout()
    })  

       

    it('TC-CHK-007 - Validar as informações dos produtos na etapa Overview', () => {
        CheckoutPage.goToOverviewPage()
        CheckoutPage.validateCheckoutInfos()
    })  

       
    it('TC-CHK-008 - Cancelar o checkout na etapa Overview', () => {
        CheckoutPage.goToOverviewPage()
        CheckoutPage.cancelCheckout() 

    })  

        
    it('TC-CHK-009 - Finalizar a compra', () => {
        CheckoutPage.goToOverviewPage()
        CheckoutPage.finishCheckout()
    })  

     
    it('TC-CHK-010 - Retornar para a página inicial após concluir a compra', () => {
        CheckoutPage.goToOverviewPage()
        CheckoutPage.finishCheckout()
        CheckoutPage.backhome()

        cy.url().should('include', '/inventory.html')    

    }) 
})