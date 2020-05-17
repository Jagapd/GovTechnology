# GovTechnology
Cypress Automation Assignment of GovTech

Setup :

Steps to use this project:

Pre-requisite 
https://docs.cypress.io/guides/getting-started/installing-cypress.html#Direct-download

Download or clone this repo
Install dependencies by running the following command in terminal (from inside your app directory i.e. where package.json is located): 
npm install

To Run test :
npm run test ( Refer to package.json on what run test does - It cleans up previous report and updates to latest report after test run)

About Framework :

The framework exhibits 
1. Modularity  - All the test steps , page objects are modularized which makes maintenance easy. 
2. Data Driven Test - use fixtures/Data.json for providing test data
3. Recording Test Video - Can be found in Video/test/
4. Failure screenshots are captured - Can be found in Screenshots folder
5. Reports generated are stored in Reports/MochaReports/reports.html 
6. Results can be seen in cypress Dashboard (https://dashboard.cypress.io/projects/6438sz/runs/7/specs) . 
7. CI/CD ready - Install Jenkins and setup job to run the test against every git merge.


Framework is based on Page object model design pattern & Modularity principle which makes the maintenance of test script easier when there is a change in page objects locaters.

This framework can be extended to BDD if team is specific about using BDD approach for automation. 

Test is written in single file to maintain module based test script.For different module we can have different files. It would be easier to execute test script based on module for regression testing.




