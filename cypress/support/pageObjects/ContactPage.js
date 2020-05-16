/*

This file contains Page object & Actions of Contact Page
 Home Page -> Login With Preferred Used -> DashBoard -> Check Eligibility -> Contact Details
 
*/

class ContactPage {

    emailElement="#react-contact_info-primary_email"
    contactInfoElement="#react-contact_info-name"


    getName() {
        return cy.get("#react-contact_info-name")
    }

    getJobTitle() {
        return cy.get('#react-contact_info-designation')
    }

    getContactNo() {
        return cy.get('#react-contact_info-phone')

    }
    getEmail() {
        return cy.get('#react-contact_info-primary_email')

    }

    getSameAsRegisteredAddressCheckBox() {
        return cy.get('#react-contact_info-correspondence_address-copied')

    }

    getAsSameContactPerson() {

        return cy.get('#react-contact_info-copied')

    }

    fillName(name) {
        this.getName().click()
        this.getName().type(name)
    }

    fillJobTitle(title) {
        this.getJobTitle().click()
        this.getJobTitle().type(title)
    }

    // fillEmail(emai) {
    //     this.getEmail().click()
    //     this.getEmail().type(emai)
    // }

    fillContactNumber(number) {
        this.getContactNo().click()
        this.getContactNo().type(number)

    }

    checkSameAsRegisteredAddressCheckBox() {
        this.getSameAsRegisteredAddressCheckBox().click()
    }

    checkSameAsContactCheckBox() {
        this.getAsSameContactPerson().click()
    }

    clickOnSave() {
        cy.get('#save-btn').click()
    }

    clickOnNext() {
        cy.get("cy.get('#next-btn')").click()
    }

    fillContactDetails(userEmail , name, designation, phno) {
        cy.get(this.emailElement).click().type(userEmail)
        cy.get(this.contactInfoElement).click()
        cy.get("#react-contact_info-name").type(name)
        cy.get('#react-contact_info-designation').click()
        cy.get('#react-contact_info-designation').type(designation)
        cy.get('#react-contact_info-phone').click()
        cy.get('#react-contact_info-phone').type(phno)
        cy.get('#react-contact_info-correspondence_address-copied').click()
        cy.get('#react-contact_info-copied').click()
        cy.get('#save-btn').click()

    }





}

export default ContactPage;