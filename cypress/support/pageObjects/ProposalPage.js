/*

This file contains Pageobject & Actions of Proposal Page
 Home Page -> Login With Preferred Used -> DashBoard -> Check Eligibility -> Proposal
*/
class ProposalPage {
    clickOnEquipment() {
        cy.get(" div.psg-category > div > div > div.controls.bgp-radio-text-format > label:nth-child(1)").click()

    }
    selectBuildingConstruction() {
        cy.get(".link").click()
        cy.get("form > div:nth-child(1) > label:nth-child(2) > span.bgp-label").click()
        cy.get("#react-solutions_list_modal-0 > div.bgp-modal-footer.modal-footer > button").click()
    }

    fillInNumberOfUnits(no) {
        cy.get('#react-project-no_of_units').click()
        cy.get('#react-project-no_of_units').type(no)
    }

    fillInDate(date) {
        cy.get('#react-project-start_date').click()
        cy.get('#react-project-start_date').type(date)
    }

    fillInWhyDoNeedRequirement(text) {
        cy.get('#react-project-reason_for_engagement').click()
        cy.get('#react-project-reason_for_engagement').type(text)
    }

    fillVendorDetails() {
        cy.get("div > div > div:nth-child(1) > div:nth-child(9) > div > div:nth-child(2) > div.form-horizontal > div > div > div > div > span.Select-arrow-zone > span").click()
        cy.get(".Select-menu-outer div:nth-child(1) div:nth-child(1) span:nth-child(1)").click()

    }

    uploadAFile(filePath) {
        //const filePath = "test.jpg";
        cy.get("#react-project-vendors-0-attachments-btn").attachFile(filePath, { subjectType: 'drag-n-drop' })
    }

    uploadSupportDocument() {
        const filePath = "test.jpg";
        cy.get("#react-project-locations-0-attachments-btn").attachFile(filePath, { subjectType: 'drag-n-drop' })
    }

    fillInProjectReferenceNumber(refno) {
        cy.get("#react-project-locations-0-project_ref_num").click().type(refno)
    }

    fillInProjectAddress(address) {
        cy.get("#react-project-locations-0-text_address").click().type(address)
    }

    fillInEstimatedValueOfProject(amount) {
        cy.get("#react-project-locations-0-estimated_cost").click().type(amount)
    }

    selectDocumentType() {
        cy.get("div.Select.Select--multi.is-searchable div.Select-control span.Select-arrow-zone > span.Select-arrow").click()
        cy.get(".Select-menu-outer").click()
        cy.get("#react-select-project-vendors-0-attachments-0-document_type-types--value").click()
        cy.get(".Select-menu-outer").click()

    }

    selectYesForMainContractor() {
        cy.get("#react-project-locations-0-main_contractor_check-true").click()
    }

    selectSupportDocumentType() {
        cy.get("#react-project-locations-0-attachments-0-attachment-row > table > tr:nth-child(2) > td > div > div > div:nth-child(2) > div > div > span.Select-arrow-zone > span").click()
        cy.get(".Select-menu-outer").click()

    }

    clickOnNext() {
        cy.get('#next-btn').click()
    }

    fillInProposalDetails(units,date,reasonforequipement,projectref,address,valueofproject,filepath) {
        this.clickOnEquipment();
        this.selectBuildingConstruction()
        this.fillInNumberOfUnits(units)
        this.fillInDate(date)
        this.fillInWhyDoNeedRequirement(reasonforequipement)
        this.fillVendorDetails()
        this.uploadAFile(filepath)
        this.selectDocumentType()
        this.fillInProjectReferenceNumber(projectref)
        this.fillInProjectAddress(address)
        this.fillInEstimatedValueOfProject(valueofproject)
        this.uploadSupportDocument()
        this.selectSupportDocumentType()
        this.selectYesForMainContractor()
        this.clickOnNext()
    }


}

export default ProposalPage;