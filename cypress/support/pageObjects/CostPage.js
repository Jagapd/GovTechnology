/*

This file contains Pageobject & Actions of Cost Page
 Home Page -> Login With Preferred Used -> DashBoard -> Check Eligibility -> Cost
 
*/
class CostPage {
    selectIntentOfPurchase() {
        cy.get("div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div > div:nth-child(2) > div > div > span.Select-arrow-zone > span").click()
        cy.get(".Select-menu-outer").click()

    }

    fillInPurchasePrice(price) {
        cy.get("#react-project_cost-mon_cost_in_billing_currency").click().type(price)
    }
    fillInPurchasePrice(price) {
        cy.get("#react-project_cost-mon_cost_in_billing_currency").click().type(price)
    }

    fillInOneTimeFee(price) {
        cy.get('#react-project_cost-ot_cost_in_billing_currency').click().type(price)
    }

    clickNext() {
        cy.get(' div > div > div:nth-child(2) > div > div.bgp-btn-right > a').click()
    }

    fillCostPageDetails(price) 
    {
        this.selectIntentOfPurchase()
        this.fillInPurchasePrice(price)
        this.clickNext()
        cy.wait(2000)

    }


}

export default CostPage;