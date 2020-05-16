/*

This file contains Page object & Actions of Eligibility Page
 Home Page -> Login With Preferred Used -> DashBoard -> Check Eligibility Page
 
*/

const TESTDATA = require('../../fixtures/Data.json');
class CheckEligibilityPage {

    getYes() {
        //  return cy.get("label:nth-child(1) > span.radiobutton")
        return cy.get(':nth-child(1) > .radiobutton')

    }
    getNo() {
        return cy.get("input[value='false']")
    }

    selectNoOption() {
        const noOption = this.getNo()
        noOption.click()
        return this
    }
    getNextButton() {
        return cy.get("#next-btn")
    }

    selectYesOption() {
        const yesOption = this.getYes()
        yesOption.click()
        return this
    }
    validateNextButtonIsDisabled() {
        const nextButton = this.getNextButton()
        nextButton.should("be.disabled")
        return this
    }

    validateNextButtonIsEnabled() {
        const nextButton = cy.get("#next-btn")
        nextButton.should("be.enabled")
        return this
    }

    validateEligibilityIsActive() {
        const menu = cy.get('div > div > ul')
        menu.find('li')
            .should(($li) => {
                expect($li).to.have.length(6)
                const className = $li[0].className
                expect(className).to.match(/active/)
            })
        cy.get("div > div > ul > li.active")
            .find("span")
            .should(($span) => {
                expect($span).to.have.text("Eligibility")
            })
        return this;
    }

    validateOtherSideMenuOptionDisabled() {
        const disabledMenu = cy.get("div > div > ul > li.disabled")
        disabledMenu.find("span")
            .should(($span) => {
                expect($span).to.have.text("Contact DetailsProposalCostBusiness ImpactDeclare & Review")
            })
        return this
    }

    validateWarningMessage() {
        const message = cy.get("div > div > div:nth-child(1) > span > div > span")
        message.should("have.text", "Visit FAQ page for more information on other government grants.")

    }

    clickOnContactDetail() {
        const contactDetailMenu = cy.get("ul > li:nth-child(3) > a > span")
        contactDetailMenu.click()
        return this
    }

    validateEligibilityMenuisEnabledAndNavigated() {
        this.getHeader().should("have.text", TESTDATA.ELIGIBILITYHEADER)
    }

    validateContactMenuIsEnabledAndNavigated() {
        this.clickOnContactDetail()
        this.getHeader().should("have.text", TESTDATA.CONTACTHEADER)
    }

    validateProposalMenuIsEnabledAndNavigated() {
        this.clickOnProposal()
        this.getHeader().should("have.text", TESTDATA.PROPOSALHEADER)
    }

    validateCostMenuIsEnabledAndNavigated() {
        this.clickOnCost()
        this.getHeader().should("have.text", TESTDATA.COSTHEADER)

    }

    validateBusinessImpactMenuIsEnabledAndNavigated() {
        this.clickOnBusinessImpact()
        this.getHeader().should("have.text", TESTDATA.BUSINESSIMPACTHEADER)

    }

    validateDeclarAndReviewMenuIsEnabledAndNavigated() {
        this.clickOnDeclareAndReview()
        this.getHeader().should("have.text", TESTDATA.DECLAREANDREVIEWHEADER)

    }

    clickOnProposal() {
        const proposalMenu = cy.get("ul > li:nth-child(4) > a > span")
        proposalMenu.click()
        return this;
    }
    clickOnCost() {
        const costMenu = cy.get("ul > li:nth-child(5) > a > span")
        costMenu.click()
        return this;
    }
    clickOnBusinessImpact() {
        const businessImpact = cy.get("ul > li:nth-child(6) > a > span")
        businessImpact.click()
        return this;
    }
    clickOnDeclareAndReview() {
        const declareAndReview = cy.get("ul > li:nth-child(7) > a > span")
        declareAndReview.click()
        return this;
    }
    getEligibility() {
        return cy.get('li.active > .active')
    }
    getHeader() {
        return cy.get("div:nth-child(1) div.main div:nth-child(1) div:nth-child(2) > h2:nth-child(1)")
    }
    getMyGrant() {
        return cy.get("a[alt='Dashboard']")
    }

    clickOnMyGrant() {
        const myGrantItem = this.getMyGrant()
        myGrantItem.click()
        return this
    }

    clickOnSaveButton() {
        const saveButton = cy.get("#save-btn")
        saveButton.click()
        return this
    }

    validateSaveButtonEnabled() {
        const saveButton = cy.get("#save-btn")
        saveButton.should('be.enabled')
        return this
    }

    validateDraftSaved() {
        cy.get(".growl-title").should("have.text", "Draft Saved")
    }

    validateTargetFAQUrl() {
        cy.get("div:nth-child(1) div.main div:nth-child(1) span:nth-child(9) > div.eligibility-advice")
            .find("a")
            .should(($a) => {
                expect($a).to.have.prop("href", "https://www.ifaq.gov.sg/BGP/apps/fcd_faqmain.aspx#FAQ_1111145")


            })

    }

    validateRequestToTargetFAQUrl() {
        cy.get("div > div > div:nth-child(1) > span > div > span > a")
            .then(($a) => {
                // pull off the fully qualified href from the <a>
                const url = $a.prop('href')

                // make a cy.request to it
                cy.request(url).its('body').should('include', '</html>')
            })
    }

}

export default CheckEligibilityPage;