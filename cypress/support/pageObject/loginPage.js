import Base from "./basePage"

class LoginPage extends Base {

    get emailTxt() { return cy.contains('Email') }
    get passwordTxt() { return cy.contains('Password') }
    get continueBtn() { return cy.contains('Continue') }

    login(email, password) {
        // Type in the email in email field
        this.emailTxt.type(email)
        // Type in the password in password field
        this.passwordTxt.type(password)
        // Click “Continue”
        this.continueBtn.click()
    }
}
export default new LoginPage();