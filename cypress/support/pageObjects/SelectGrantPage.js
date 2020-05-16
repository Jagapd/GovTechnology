/*

This file contains Pageobject & Actions of Proposal Page
 Home Page -> Login With Preferred Used -> My Grant -> 

*/
class SelectGrantPage {
    clickOnUpgradeKeyBusinessArea() 
    {
        const upgradeBusinessArea=cy.get("div:nth-child(2) > div > label > div")
        upgradeBusinessArea.click()
        return this;
    }

}

export default SelectGrantPage;