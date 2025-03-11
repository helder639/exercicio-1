import InfoUsuario from '../fixtures/InfoUsuario.json'
import InfoBank from '../fixtures/InfoBank.json'
import LoginPage from '../pages/loginPage.js'
import MenuPage from  '../pages/menupage.js'

const Chance = require('chance')
const menuPage = new MenuPage
const loginPage =  new LoginPage


describe('Solicitar dinheiro', () => {
  it('Deve exibir uma mensagem de sucesso ao concluir a solicitação', () => {
    let first = chance.first()
    let last = chance.last()
    let user =  chance.name()
    loginPage.AcessoPaginaLogin()
    loginPage.CriandoContaCerto(first, last, user, InfoUsuario.userSucess.password, InfoUsuario.userSucess.confirmpassword) 
    loginPage.Logando(user, InfoUsuario.userSucess.password)
    menuPage.CriandoBanco(InfoBank.BankSucess.bankname, InfoBank.BankSucess.routingnumber, InfoBank.BankSucess.accountnumber)
    menuPage.SolicitarDinheiro()
  })
})

describe('Enviar dinheiro', () => {
  it('Deve exibir uma mensagem de sucesso ao enviar dinheiro mesmo com o saldo insuficiente', () => {
    let first = chance.first()
    let last = chance.last()
    let user =  chance.name()
    loginPage.AcessoPaginaLogin()
    loginPage.CriandoContaCerto(first, last, user, InfoUsuario.userSucess.password, InfoUsuario.userSucess.confirmpassword) 
    loginPage.Logando(user, InfoUsuario.userSucess.password)
    menuPage.CriandoBanco(InfoBank.BankSucess.bankname, InfoBank.BankSucess.routingnumber, InfoBank.BankSucess.accountnumber)
    menuPage.EnviarDinheiro()
  })
})

describe('Mensagens de erro ao criar o banco', () => {
  it('Deve exibir mensagens de erro ao não preencher as informações corretas', () => {
    let first = chance.first()
    let last = chance.last()
    let user =  chance.name()
    loginPage.AcessoPaginaLogin()
    loginPage.CriandoContaCerto(first, last, user, InfoUsuario.userSucess.password, InfoUsuario.userSucess.confirmpassword) 
    loginPage.Logando(user, InfoUsuario.userSucess.password)
    menuPage.ErroBanco()
  })
})

describe('Mensagens de erro ao enviar dinheiro', () => {
  it('Deve exibir mensagens de erro ao não preencher as informações', () => {
    let first = chance.first()
    let last = chance.last()
    let user =  chance.name()
    loginPage.AcessoPaginaLogin()
    loginPage.CriandoContaCerto(first, last, user, InfoUsuario.userSucess.password, InfoUsuario.userSucess.confirmpassword) 
    loginPage.Logando(user, InfoUsuario.userSucess.password)
    menuPage.CriandoBanco(InfoBank.BankSucess.bankname, InfoBank.BankSucess.routingnumber, InfoBank.BankSucess.accountnumber)
    menuPage.ErroDinheiro()
  })
})