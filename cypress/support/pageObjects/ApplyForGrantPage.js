/*

This file contains Page object & Actions of Apply FOr Grant Page
 Home Page -> Login With Preferred Used -> DashBoard -> My Grant->Select Sector -> Select Grant ->   Apply Grant
 
*/
class ApplyForGrantPage {

    applyGrantWithPrescopedProductivity() {
        const preScopedProductivity = cy.get("div > div > div:nth-child(1) > div > label > div > div")
        preScopedProductivity.click()
        const applyButton = cy.get("#go-to-grant")
        applyButton.click()
        return this;


    }
}

export default ApplyForGrantPage;