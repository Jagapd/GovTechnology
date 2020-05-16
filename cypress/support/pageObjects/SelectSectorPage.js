/*

This file contains Pageobject & Actions of  Select Sector Page
 Home Page -> Login With Preferred Used -> DashBoard -> My Grant->Select Sector 
*/
class SelectSectorPage {
    clickBuildingAndConstruction() {
        const buildingAndConstructionItem = cy.get("div:nth-child(3) > div:nth-child(1) > div > label > div > div")
        buildingAndConstructionItem.click()
        return this;
    }

}

export default SelectSectorPage;
