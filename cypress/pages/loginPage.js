class LoginPage{

    selectorList(){
        const selectors = {
            SingUpButton: "[href='/signup']",
            FirstName: "[name='firstName']",
            LastName: "[name='lastName']",
            UserName: "[name='username']",
            Password: "[name='password']",
            ConfirmPassword: "[name='confirmPassword']",
            SingUpConfirmButton: "[type='submit']",
            ErrorMessage: ".MuiFormHelperText-contained",
            ConfirmPasswordError: ".MuiFormHelperText-filled",
            LoginErrorMessage: ".MuiAlert-message"
            
        }   
        return selectors
    }
    AcessoPaginaLogin(){
        cy.visit('http://localhost:3000/signin')
    }

    CriandoContaCerto(firstname, lastname, username, password, confirmpassword){
        cy.get(this.selectorList().SingUpButton).click()
        cy.get(this.selectorList().FirstName).type(firstname)
        cy.get(this.selectorList().LastName).type(lastname)
        cy.get(this.selectorList().UserName).type(username)
        cy.get(this.selectorList().Password).type(password)
        cy.get(this.selectorList().ConfirmPassword).type(confirmpassword)
        cy.get(this.selectorList().SingUpConfirmButton).click()
    }

    CriandoContaErrado(password, confirmpassword){
        cy.get(this.selectorList().SingUpButton).click()
        cy.get(this.selectorList().FirstName).click()
        cy.get(this.selectorList().LastName).click()
        cy.get(this.selectorList().UserName)
        cy.get(this.selectorList().Password).type(password)
        cy.get(this.selectorList().ConfirmPassword).type(confirmpassword)
        cy.get(this.selectorList().ErrorMessage).eq(0)
        cy.get(this.selectorList().ErrorMessage).eq(1)
        cy.get(this.selectorList().ErrorMessage).eq(2)
        cy.get(this.selectorList().ConfirmPasswordError)
    }

    Logando(username, password){
        cy.get(this.selectorList().UserName).type(username)
        cy.get(this.selectorList().Password).type(password)
        cy.get(this.selectorList().SingUpConfirmButton).click()
    }

    LogandoErrado(username, password){
        cy.get(this.selectorList().UserName).type(username)
        cy.get(this.selectorList().Password).type(password)
        cy.get(this.selectorList().SingUpConfirmButton).click()
        cy.get(this.selectorList().LoginErrorMessage)
    }
}

export default LoginPage