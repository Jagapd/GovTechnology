/*

This file contains Pageobject & Actions of Declare& review Page
 Home Page -> Login With Preferred Used -> DashBoard -> Check Eligibility -> Declare& review

*/
class DeclareAndReviewPage {
    fillInReviewQuestions() {
        cy.get("div > div > div:nth-child(1) > ol > li:nth-child(1) > div > div.controls.bgp-radio-text-format > label:nth-child(1) > span.radiobutton").click()
        cy.get("div > div > div:nth-child(1) > ol > li:nth-child(2) > div > div.controls.bgp-radio-text-format > label:nth-child(1) > span.radiobutton").click()
        cy.get("div > div > div:nth-child(1) > ol > li:nth-child(3) > div > div.controls.bgp-radio-text-format > label:nth-child(1) > span.radiobutton").click()
        cy.get("div > div > div:nth-child(1) > ol > li:nth-child(4) > div > div.controls.bgp-radio-text-format > label:nth-child(1) > span.radiobutton").click()
        cy.get("div > div > div:nth-child(1) > ol > li:nth-child(5) > div > div.controls.bgp-radio-text-format > label:nth-child(1) > span.radiobutton").click()
        cy.get("div > div > div:nth-child(1) > ol > li:nth-child(6) > div > div.controls.bgp-radio-text-format > label:nth-child(1) > span.radiobutton").click()
        cy.get("div > div > div:nth-child(1) > ol > li:nth-child(7) > div > div.controls.bgp-radio-text-format > label:nth-child(1) > span.radiobutton").click()
        cy.get("div > div > div:nth-child(1) > ol > li:nth-child(8) > div > div.controls.bgp-radio-text-format > label:nth-child(2) > span.radiobutton").click()
        cy.get("div > div > div:nth-child(1) > ol > li:nth-child(9) > div > div.controls.bgp-radio-text-format > label:nth-child(2) > span.radiobutton").click()
        cy.get("#react-declaration-consent_acknowledgement_check").click()


    }

    reviewAndSubmit() {
        cy.get("#review-btn").click()
        cy.wait(10000)
        cy.scrollTo('bottom')
        cy.get("input[type=checkbox]").click()
        cy.get("#submit-btn").click()

    }

    validateApplicationSubmissionAndRefId() {
        cy.get("section > div:nth-child(2) > div:nth-child(1) > h3").should("have.text", "Your application has been submitted.")
        cy.get("div > div > div:nth-child(2) > section > div:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(1)")
            .find('td:nth-child(2)')
            .should(($td) => {
                expect($td).to.have.length(1)
                const text_1 = $td.text()
                expect(text_1).to.match(/^[a-zA-Z0-9]+$/)
                return text_1
            })


    }

    fillDeclareAndReview() {
        this.fillInReviewQuestions()
        this.reviewAndSubmit()

    }

    validateApplicationCreated() {
        var refID = this.validateApplicationSubmissionAndRefId()
        cy.log(refID)

    }

}

export default DeclareAndReviewPage;