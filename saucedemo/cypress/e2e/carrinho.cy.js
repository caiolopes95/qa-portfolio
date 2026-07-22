import LoginPage from '../pages/LoginPage';
import loginData from '../fixtures/loginData.json';
import CatalogoPage from '../pages/CarrinhoPage';


describe('Catálogo de Produtos', () => {

   beforeEach(() => {
        LoginPage.visitPage()
        LoginPage.login(loginData.validUser.username, loginData.passwords.valid)
   })

    it('TC-CART-001 - Adicionar um produto ao carrinho pela listagem', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    })  
    

    it('TC-CART-002 - Visualizar os produtos adicionados ao carrinho', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()

    })  

    it('TC-CART-003 - Validar as informações do produto no carrinho', () => {
        cy.get('[data-test="inventory-item-name"]').should('contain', 'Sauce')
    })  
    
    
    it('TC-CART-004 - Remover um produto diretamente do carrinho', () => {
        
    })  

    it('TC-CART-005 - Adicionar um produto ao carrinho pela tela de detalhes', () => {
        
    })      

    it('TC-CART-006 - Remover um produto pela tela de detalhes', () => {
        
    })  

    it('TC-CART-007 - Continuar comprando a partir do carrinho', () => {
        
    })  
    
    it('TC-CART-008 - Iniciar o processo de checkout', () => {
        
    })      
})