class HistoPage{

    selectorList(){
        const selectors = {
            MineButton: "[data-test='nav-personal-tab']",
            Transactions: ".css-1tlfly5-MuiTypography-root",
            NoTransactionsMessage: ".css-mpyo7s-MuiTypography-root",
            CreatTransactButton: "[data-test='transaction-list-empty-create-transaction-button']"
        }  
        return selectors
    }

    HistoricoFeito(){
        cy.get(this.selectorList().MineButton).click()
        cy.get(this.selectorList().Transactions)
    }

    HistoricoVazio(){
        cy.get(this.selectorList().MineButton).click()
        cy.get(this.selectorList().NoTransactionsMessage)
        cy.get(this.selectorList().CreatTransactButton)
    }
}
export default HistoPage