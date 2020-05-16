/*

This file contains Page object & Actions of Login with Preferred User
Home Page -> Login with Preferred User
"https://bgp-qa.gds-gov.tech/saml/sso_stub"

*/


class LoginPage {

    // getPreferredUser(prefereduserid) {
    //     const field = cy.get('form:nth-child(6) > select')
    //     field.select(prefereduserid)
    // }


    // clickLoginButton() {
    //     cy.get("form:nth-child(6) > button").click()
    // }
    loginWithPreferredUser(id) {
        const selectDropDown = cy.get('form:nth-child(6) > select')
        selectDropDown.select(id)
        const loginButton = cy.get("form:nth-child(6) > button")
        loginButton.click()
        return this
    }
}

export default LoginPage;
