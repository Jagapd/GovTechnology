/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/HomePage'
import LoginPage from '../../support/pageObjects/LoginPage'
import MyGrantPage from '../../support/pageObjects/MyGrantPage'
import SelectSectorPage from '../../support/pageObjects/SelectSectorPage'
import ApplyForGrantPage from '../../support/pageObjects/ApplyForGrantPage'
import GrantActionPage from '../../support/pageObjects/GrantActionPage'
import SelectGrantPage from '../../support/pageObjects/SelectGrantPage'
import ContactPage from '../../support/pageObjects/ContactPage'
import ProposalPage from '../../support/pageObjects/ProposalPage'
import 'cypress-file-upload';
import CostPage from '../../support/pageObjects/CostPage'
import BusinessImpact from '../../support/pageObjects/BusinessImpact'
import DeclareAndReviewPage from '../../support/pageObjects/DeclareReviewPage'
import CheckEligibilityPage from '../../support/pageObjects/CheckEligibilityPage'


const TESTDATA = require('../../fixtures/Data.json');
describe('My Grant Acceptance Test Suite', function () {
        const contact = new ContactPage()
        const home = new HomePage()
        const login = new LoginPage()
        const selectSector = new SelectSectorPage()
        const applyForGrant = new ApplyForGrantPage()
        const grantAction = new GrantActionPage()
        const selectGrant = new SelectGrantPage()
        const checkEligibility = new CheckEligibilityPage()
        const myGrant = new MyGrantPage()
        const proposal = new ProposalPage()
        const cost = new CostPage()
        const businessImpact = new BusinessImpact()
        const declareAndReview = new DeclareAndReviewPage()

        beforeEach(() => {
                cy.visit(Cypress.config().baseUrl)
                home.login()
                login.loginWithPreferredUser(TESTDATA.USERID)
                myGrant.getNewGrant()
                selectSector.clickBuildingAndConstruction()
                selectGrant.clickOnUpgradeKeyBusinessArea()
                applyForGrant.applyGrantWithPrescopedProductivity()
                grantAction.clickOnProceedButton()
                console.log("Setup Done")
        })
        /*
                AC 1-1: 
                Given user is in My Grant Page
                When no answer is selected for the question Does the applicant meet the eligibility criteria, 
                Then the following
                items shall be disabled:
                the ‘Next’ button
                all side menu except Eligibility menu
        */
        it("AC1-1 Validate Next button and side menu is inactive & Eligibility menu is active when no answer is selected in My Grant page", function () {
                
                checkEligibility.validateSaveButtonEnabled()
                checkEligibility.validateNextButtonIsDisabled()
                checkEligibility.validateEligibilityIsActive()
                checkEligibility.validateOtherSideMenuOptionDisabled()

        })
        /*

                AC 1-2: 
                Given user is in My Grant Page
                When answer ‘Yes’, 
                Then system shall enable the items Next Button and all side menu Eligibility , Contact , Proposal ,Cost ,BusinessImpact , DecalreAndReview
                User is allowed to navigate through side menus.
        */

        it("AC1-2 Select answer Yes and Validate Next button is enabled, all the menu option is active and can navigate", function () {
                checkEligibility.selectYesOption()
                checkEligibility.validateNextButtonIsEnabled()
                checkEligibility.validateEligibilityMenuisEnabledAndNavigated()
                checkEligibility.validateContactMenuIsEnabledAndNavigated()
                checkEligibility.validateProposalMenuIsEnabledAndNavigated()
                checkEligibility.validateCostMenuIsEnabledAndNavigated()
                checkEligibility.validateBusinessImpactMenuIsEnabledAndNavigated()
                checkEligibility.validateDeclarAndReviewMenuIsEnabledAndNavigated()

        })

        /*
                AC 1-3:
                Given user is in My Grant Page
                When answer ‘No’ is selected
                Then system shall disable the items Next Button and menu items other than Eligibility and, 
                triggers warning message ‘Visit FAQ page for more information on other government grants.’.
        */
        it("AC1-3 Select No option and validate Next button , side menu other than eligibility is disabled  and warning message is triggered", function () {
                checkEligibility.selectNoOption()
                checkEligibility.validateNextButtonIsDisabled()
                checkEligibility.validateEligibilityIsActive()
                checkEligibility.validateOtherSideMenuOptionDisabled()
                checkEligibility.validateWarningMessage()
        })

        /*
                AC 1-4: 
                Given user is in My Grant Page
                When click on the FAQ link, 
                Then system shall launch the website in the same windows tab with URL:
                https://ifaq.gov.sg/BGP/apps/fcd_faqmain.aspx#FAQ_1111145

        */
        it("AC1-4 On clicking FAQ validate system launch the website in same window tab with URL https://ifaq.gov.sg/BGP/apps/fcd_faqmain.aspx#FAQ_1111145", function () {
                checkEligibility.selectNoOption()
                checkEligibility.validateWarningMessage()
                checkEligibility.validateTargetFAQUrl(TESTDATA.TARGETURL)
                checkEligibility.validateRequestToTargetFAQUrl()
        })


        /*
                AC1-5: 
                Given user is in My Grant Page
                When I click on the ‘Save’ button, 
                Then I should be able to save the form as draft.
        */
        it("AC1-5 Click on Save button to save the form as draft", function () {
                checkEligibility.clickOnSaveButton()
                checkEligibility.validateDraftSaved()

        })

        /*
                AC1-6: 
                Given user is in My Grant Page
                When I go to the home page, 
                Then I should see my draft form and when I click on it system should retrieve the
                form for editing.
        */
        it("AC1-6 Go to home page and retrieve the draft form saved for editing", function () {
                checkEligibility.clickOnMyGrant()
                myGrant.clickOnDraft()
                myGrant.clickOnLastSavedDraft()
                myGrant.validateDraftApplication()
       })

        /*      AC1-7: Given user is in My Grant Page
                When I fill up all the various sections (Contact Details, Proposal, Cost, Business Impact, Declare &amp; Review)
        ,       Then I should be able to submit the form and get back an application ref ID (success message).
        */

        it("AC1-7 Retrieve application id by filling in various sections", function () {

                checkEligibility.selectYesOption()
                checkEligibility.clickOnContactDetail()
                contact.fillContactDetails(TESTDATA.EMAIL, TESTDATA.NAME, TESTDATA.DESIGNATION, TESTDATA.PHONENO)
                checkEligibility.clickOnProposal()
                proposal.fillInProposalDetails(TESTDATA.UNITS, TESTDATA.DATE, TESTDATA.REASONFOREQUIPMENT, TESTDATA.PROJECTREF, TESTDATA.ADDRESS, TESTDATA.VALUEOFPROJECT, TESTDATA.FILEPATH)
                cost.fillCostPageDetails(TESTDATA.PRICE)
                businessImpact.fillBusinessImpactDetails(TESTDATA.IMPACT, TESTDATA.REASON, TESTDATA.PERCENTAGE)
                declareAndReview.fillDeclareAndReview()
                declareAndReview.validateApplicationCreated()


        })
})

