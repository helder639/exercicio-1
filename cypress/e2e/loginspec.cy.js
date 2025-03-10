import InfoUsuario from '../fixtures/InfoUsuario.json'
import LoginPage from '../pages/loginPage.js'


const loginPage =  new LoginPage
describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    loginPage.AcessoPaginaLogin()
    loginPage.CriandoContaCerto(InfoUsuario.userSucess.firstname, InfoUsuario.userSucess.lastname, InfoUsuario.userSucess.username, InfoUsuario.userSucess.password, InfoUsuario.userSucess.confirmpassword) 
    loginPage.Logando(InfoUsuario.userSucess.username, InfoUsuario.userSucess.password) 
  })
})

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    loginPage.AcessoPaginaLogin()
    loginPage.CriandoContaErrado(InfoUsuario.userFail.password, InfoUsuario.userFail.confirmpassword)
  })
})

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginPage.AcessoPaginaLogin()
    loginPage.Logando(InfoUsuario.userSucess.username, InfoUsuario.userSucess.confirmpassword)
  })
})

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.AcessoPaginaLogin()
    loginPage.Logando(InfoUsuario.userFail.username, InfoUsuario.userFail.confirmpassword)
  })
})