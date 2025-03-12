import InfoUsuario from '../fixtures/InfoUsuario.json'
import InfoBank from '../fixtures/InfoBank.json'
import LoginPage from '../pages/loginPage.js'
import MenuPage from  '../pages/menupage.js'
import HistoPage from '../pages/histoPage.js'

const Chance = require('chance')
const menuPage = new MenuPage
const loginPage =  new LoginPage
const histoPage = new HistoPage


describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    let first = chance.first()
    let last = chance.last()
    let user =  chance.name()
    loginPage.AcessoPaginaLogin()
    loginPage.CriandoContaCerto(first, last, user, InfoUsuario.userSucess.password, InfoUsuario.userSucess.confirmpassword) 
    loginPage.Logando(user, InfoUsuario.userSucess.password)
    menuPage.CriandoBanco(InfoBank.BankSucess.bankname, InfoBank.BankSucess.routingnumber, InfoBank.BankSucess.accountnumber)
    menuPage.SolicitarDinheiro()
    menuPage.EnviarDinheiro()
    histoPage.HistoricoFeito()
  })
})

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    let first = chance.first()
    let last = chance.last()
    let user =  chance.name()
    loginPage.AcessoPaginaLogin()
    loginPage.CriandoContaCerto(first, last, user, InfoUsuario.userSucess.password, InfoUsuario.userSucess.confirmpassword) 
    loginPage.Logando(user, InfoUsuario.userSucess.password)
    menuPage.CriandoBanco(InfoBank.BankSucess.bankname, InfoBank.BankSucess.routingnumber, InfoBank.BankSucess.accountnumber)
    histoPage.HistoricoVazio()
  })
})
