/*
This file contains Pageobject & Actions of Grants Dashboard Page
Home Page -> Login with Preferred User -> My Grant
"https://bgp-qa.gds-gov.tech/dashboard"

*/

class MyGrantPage {
    getNewGrant() {
        const getNewGrant = cy.get("#grants > div:nth-child(2) > div > a:nth-child(2) > section")
        getNewGrant.click()
        return this;
    }

    getDrafts() {
        return cy.get("#grants > div:nth-child(3) > section.dashboard-tab-container > ul > li:nth-child(2) > a")
    }

    clickOnDraft() {
        cy.get("#grants > div:nth-child(3) > section.dashboard-tab-container > ul > li:nth-child(2) > a").click()
    }

    getLastSavedDraft() {
        return cy.get("#db-apps-drafts > tbody > tr:nth-child(1) > td.project-title > a > .title-div")
    }

    clickOnLastSavedDraft() {
        cy.get("#db-apps-drafts > tbody > tr:nth-child(1) > td.project-title > a > .title-div").click()
    }

    getProceedsButton() {
        return cy.get('#keyPage-form-button')
    }

    validateDraftApplication() {
        cy.get("h3.actiontitle:nth-child(1)").should("have.text", "Application Form")
        cy.get("div.col-md-7.col-xs-12.Vcenter.key-action-description > span").contains("View or edit your grant submission form")
    }

}
export default MyGrantPage;