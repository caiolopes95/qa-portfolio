import LoginPage from '../pages/LoginPage';
import settings from '../fixtures/settings.json';

describe('Login', () => {

   beforeEach(() => {
      LoginPage.visitPage()
   })

    it('TC-LOGIN-001 - Login com credenciais válidas', () => {
      LoginPage.loginSuccessful(
            settings.validUser.username,
            settings.validUser.password
      )     
      LoginPage.validateSuccessfulLogin()
    })

 
    it('TC-LOGIN-002 - Login com senha inválida', () => {
      LoginPage.invalidPassword(
            settings.invalidUser.username,
            settings.invalidUser.password
      )
      LoginPage.validateInvalidPassword()      
    })

   /*
    it('TC-LOGIN-003 - Login sem preencher o usuário', () => {

    })         

    it('TC-LOGIN-004 - Login sem preencher a senha', () => {

    })            

    it('TC-LOGIN-005 - Login sem preencher usuário e senha', () => {

    })    

    it('TC-LOGIN-006 - Login com usuário inexistente', () => {

    })  
    
*/
})