/*

This file contains Pageobject & Actions of Home Page
 Home Page "https://bgp-qa.gds-gov.tech/"

*/


class HomePage {


  login() {
    const loginButton = cy.get("#login-button > span")
    loginButton.click()
    return this
  }

}

export default HomePage;
