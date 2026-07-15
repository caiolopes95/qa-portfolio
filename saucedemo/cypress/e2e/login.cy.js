import LoginPage from '../pages/LoginPage';
import loginData from '../fixtures/loginData.json';

describe('Login', () => {

   beforeEach(() => {
      LoginPage.visitPage()
   })

    it('TC-LOGIN-001 - Login com credenciais válidas', () => {
      LoginPage.login(
            loginData.validUser.username,
            loginData.passwords.valid
      )     
      LoginPage.validateSuccessfulLogin()
    })

 
    it('TC-LOGIN-002 - Login com senha inválida', () => {
      LoginPage.login(
            loginData.validUser.username,
            loginData.passwords.invalid
      )
      LoginPage.validateInvalidPassword()      
    })

   
    it('TC-LOGIN-003 - Login sem preencher o usuário', () => {
      LoginPage.loginWithoutUser(
        loginData.passwords.valid
      )
    })         

   
    it('TC-LOGIN-004 - Login sem preencher a senha', () => {
      LoginPage.loginWithoutPassword(
        loginData.validUser.username
      )
    })            

    
    it('TC-LOGIN-005 - Login sem preencher usuário e senha', () => {
      LoginPage.loginNull()
    })    

    
    it('TC-LOGIN-006 - Login com usuário inexistente', () => {
      LoginPage.login(
            loginData.wrongUser.username,
            loginData.passwords.valid        
      )
      LoginPage.loginNotRegistered()
    })  

    
     it('TC-LOGIN-007 - Login com usuário bloqueado', () => {
      LoginPage.login(
          loginData.lockedUser.username,
          loginData.passwords.valid  
      )
      LoginPage.lockedUser()
    })


})