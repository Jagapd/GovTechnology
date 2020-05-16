/*

This file contains Page object & Actions of Business Impact Page
 Home Page -> Login With Preferred Used -> Dash Board -> Check Eligibility -> Business Impact
 
*/
class BusinessImpact {
    fillInImpactOfEquipment(impact) {
        cy.get("#react-project_impact-impact_description").click().type(impact)
    }
    fillInReasonForEquipment(reason) {
        cy.get("#react-project_impact-task_description").click().type(reason)
    }
    fillInEfficiency(percentage) {
        cy.get("#react-project_impact-task_efficiency_percentage").click().type(percentage)
    }
    clickNext() {
        cy.get('#next-btn').click()
    }
    fillBusinessImpactDetails(impact,reason,percentage) {
        this.fillInImpactOfEquipment(impact)
        this.fillInReasonForEquipment(reason)
        this.fillInEfficiency(percentage)
        this.clickNext()
        cy.wait(10000)
    }

}

export default BusinessImpact;