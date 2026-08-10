import LoginPage from '../pages/LoginPage';
import loginData from '../fixtures/loginData.json';
import CarrinhoPage from '../pages/CarrinhoPage';

describe('Catálogo de Produtos', () => {

   beforeEach(() => {
        cy.login()  
   })

    it('TC-CART-001 - Adicionar um produto ao carrinho pela listagem', () => {
        CarrinhoPage.addToCartFromList()

        cy.get('.shopping_cart_badge').should('contain', '1')
    })  
    

    it('TC-CART-002 - Visualizar os produtos adicionados ao carrinho', () => {
        CarrinhoPage.addToCartFromList()
        CarrinhoPage.goToCart()

        cy.get('.cart_item').should('have.length', 1)
    })  


    it('TC-CART-003 - Validar as informações do produto no carrinho', () => {
        CarrinhoPage.addToCartFromList()
        CarrinhoPage.goToCart()
        CarrinhoPage.validateCartItems()
    })  
    

    it('TC-CART-004 - Remover um produto diretamente do carrinho', () => {
        CarrinhoPage.addToCartFromList()
        CarrinhoPage.goToCart()   
        CarrinhoPage.deleteItem()     

        cy.get('.shopping_cart_badge').should('not.exist')
    })  

    
    it('TC-CART-005 - Adicionar um produto ao carrinho pela tela de detalhes', () => {
        CarrinhoPage.accessDetails()
        CarrinhoPage.addToCartFromDetails()

        cy.get('.shopping_cart_badge').should('have.text', '1')
    })      

    
    it('TC-CART-006 - Remover um produto pela tela de detalhes', () => {
        CarrinhoPage.accessDetails()
        CarrinhoPage.addToCartFromDetails()
        CarrinhoPage.deleteItemFromDetails()

        cy.get('.shopping_cart_badge').should('not.exist')
        cy.contains('Add to cart').should('be.visible')
    })  

   
    it('TC-CART-007 - Continuar comprando a partir do carrinho', () => {
        CarrinhoPage.addToCartFromList()
        CarrinhoPage.goToCart()   
        CarrinhoPage.continueShopping()
        
        cy.url().should('include', '/inventory.html')
    })  
    
    
})