import LoginPage from '../pages/LoginPage';
import loginData from '../fixtures/loginData.json';
import CatalogoPage from '../pages/CatalogoPage';


describe('Catálogo de Produtos', () => {

   beforeEach(() => {
        LoginPage.visitPage()
        LoginPage.login(loginData.validUser.username, loginData.passwords.valid)
   })

    it('TC-PROD-001 - Validar carregamento da tela de produtos', () => {
        CatalogoPage.validateProducts()
    })

    it('TC-PROD-002 - Visualizar detalhes de um produto', () => {
        CatalogoPage.productDetails()
    })

    it('TC-PROD-003 - Retornar à lista de produtos após visualizar os detalhes', () => {
        CatalogoPage.productDetails()
        CatalogoPage.backToCatalog()
    })

    it('TC-PROD-004 - Ordenar produtos por nome (A → Z)', () => {  
        CatalogoPage.productsFilters('az')
        cy.validateSortAscText('.inventory_item_name');
    })  
    
    it('TC-PROD-005 - Ordenar produtos por nome (Z → A)', () => {
        CatalogoPage.productsFilters('za')
        cy.validateSortDescText('.inventory_item_name');        
    }) 

    
    it('TC-PROD-006 - Orden ar produtos por preço (Menor → Maior)', () => {
        CatalogoPage.productsFilters('lohi')
        cy.validateSortAsc('.inventory_item_price')
    }) 

    it('TC-PROD-007 - Ordenar produtos por preço (Maior → Menor)', () => {
        CatalogoPage.productsFilters('hilo')
        cy.validateSortDesc('.inventory_item_price')
    })
 

})