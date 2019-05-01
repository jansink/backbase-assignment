# Backbase assignment QA Engineer

Toolkit used:
* Driver: [Protractor](http://www.protractortest.org)
* BDD: [Cucumberjs](https://cucumber.io) ([GitHub](https://github.com/cucumber/cucumber-js))
* Assertions: [Chai](http://chaijs.com)

De testen worden headless en in direct mode uitgevoerd op Google Chrome browser op de locale machine. 

### Prerequisites

To run the regression tests Node.js is required https://nodejs.org/en/. All the necessary npm packages, like protractor and cucumber, are in the package.json. 

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
### Reports
The reports of the regression tests can be found in de reports directory.
/reports/e2e/index.html
