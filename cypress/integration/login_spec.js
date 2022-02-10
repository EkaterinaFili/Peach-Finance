import LoginPage from "../support/pageObject/loginPage"
const email = 'auto.user+bo-pboq-2qlj@peachfinance.com'
const password = 'hello12345'

describe("User should be able to login with valid credentials", () => {
    it('visit url', () => {
        cy.visit('https://peach-borrower.peach-dev.finance/login')
    })
    it('login', () => {
        LoginPage.login(email, password)
    })

    it('Verify User should be able to login with valid credentials', () => {
        cy.contains('wfstaaq')
    })
})

