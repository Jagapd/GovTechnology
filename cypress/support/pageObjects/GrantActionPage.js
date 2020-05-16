class GrantActionPage {

    clickOnProceedButton() {
        const proceedButton = cy.get("#keyPage-form-button")
        proceedButton.click()
        return this
    }

}

export default GrantActionPage;