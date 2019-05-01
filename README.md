# Backbase assignment QA Engineer

Toolkit used:
* Driver: [Protractor](http://www.protractortest.org)
* BDD: [Cucumberjs](https://cucumber.io) ([GitHub](https://github.com/cucumber/cucumber-js))
* Assertions: [Chai](http://chaijs.com) and [Chai Smoothie](https://www.npmjs.com/package/chai-smoothie)
* Non-Functional testing: [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
* Ad-hoc load testing: [Artillery](https://artillery.io/)

De testen worden headless en in direct mode uitgevoerd op Google Chrome browser op de lokale machine. 

### Prerequisites

* To run the regression tests Node.js is required https://nodejs.org/en/. 

* The application under test is: [Sample Computer Database](http://computer-database.herokuapp.com/computers). 
This application needs to be served bij Heroku in order for the tests to run.

### Setup
Run the following commands from the project root:
```bash
npm i
```
### Run regression tests
To run the e2e regression tests:
```bash
npm run test:e2e
```
### Regression tests report
The reports of the regression tests can be found in de reports directory.
```bash
/reports/e2e/index.html
```
### Run lighthouse test
To get some non-functional feedback, run Google lighthouse.
```bash
npm run test:lighthouse
```
### Run lighthouse test
To run an ad-hoc load test run artillery
```bash
npm run test:artillery
```