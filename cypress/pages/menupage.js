class MenuPage {

    selectorList(){
        const selectors = {
            MenuNextButton: "[data-test='user-onboarding-next']",
            BankName: "[name='bankName']",
            RoutingNumber: "[name='routingNumber']",
            AccountNumber: "[name='accountNumber']",
            SaveBankButton: "[data-test='bankaccount-submit']",
            DoneButton: "[data-test='user-onboarding-next']",
            New$Button: "[data-test='nav-top-new-transaction']",
            ListPerson: ".css-konndc-MuiListItemText-root",
            Amount: "[name='amount']",
            AddNote: "[placeholder='Add a note']",
            RequestButton: "[data-test='transaction-create-submit-request']",
            ReturnTransactionButton: "[data-test='new-transaction-return-to-transactions']",
            SuccessAlert: '[data-test="alert-bar-success"]',
            PayButton: "[data-test='transaction-create-submit-payment']",
            ErroBankMessage: ".MuiFormHelperText-root",
            WhiteScreen: "[data-test='user-onboarding-dialog-content']",
            ErroMoneyMessage: ".MuiFormHelperText-root",
            MoneyPage: ".TransactionCreateStepTwo-paper"
        }
        return selectors
    }

    CriandoBanco(bankname, routingnumber, accountnumber){
        cy.get(this.selectorList().MenuNextButton).click()
        cy.get(this.selectorList().BankName).type(bankname)
        cy.get(this.selectorList().RoutingNumber).type(routingnumber)
        cy.get(this.selectorList().AccountNumber).type(accountnumber)
        cy.get(this.selectorList().SaveBankButton).click()
        cy.get(this.selectorList().DoneButton).click()
    }

    SolicitarDinheiro(){
        cy.get(this.selectorList().New$Button).click()
        cy.get(this.selectorList().ListPerson).eq(3).click({force: true})
        cy.get(this.selectorList().Amount).type('100')
        cy.get(this.selectorList().AddNote).type('comentário')
        cy.get(this.selectorList().RequestButton).click()
        cy.get(this.selectorList().ReturnTransactionButton).click()
        cy.get(this.selectorList().SuccessAlert)
    }

    EnviarDinheiro(){
        cy.get(this.selectorList().New$Button).click()
        cy.get(this.selectorList().ListPerson).eq(3).click({force: true})
        cy.get(this.selectorList().Amount).type('100')
        cy.get(this.selectorList().AddNote).type('comentário')
        cy.get(this.selectorList().PayButton).click()
        cy.get(this.selectorList().ReturnTransactionButton).click()
        cy.get(this.selectorList().SuccessAlert)
    }

    ErroBanco(){
        cy.get(this.selectorList().MenuNextButton).click()
        cy.get(this.selectorList().BankName).click()
        cy.get(this.selectorList().RoutingNumber).click()
        cy.get(this.selectorList().AccountNumber).click()
        cy.get(this.selectorList().WhiteScreen).click()
        cy.get(this.selectorList().ErroBankMessage).eq(0)
        cy.get(this.selectorList().ErroBankMessage).eq(1)
        cy.get(this.selectorList().ErroBankMessage).eq(2)
    }

    ErroDinheiro(){
        cy.get(this.selectorList().New$Button).click()
        cy.get(this.selectorList().ListPerson).eq(3).click({force: true})
        cy.get(this.selectorList().Amount).click()
        cy.get(this.selectorList().AddNote).click()
        cy.get(this.selectorList().MoneyPage).click()
        cy.get(this.selectorList().ErroMoneyMessage).eq(0)
        cy.get(this.selectorList().ErroMoneyMessage).eq(1)
    }
}
export default MenuPage