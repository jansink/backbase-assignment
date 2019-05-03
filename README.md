# Backbase assignment QA Engineer

#### Toolkit used
* Driver: [Protractor](http://www.protractortest.org)
* BDD: [Cucumberjs](https://cucumber.io) ([GitHub](https://github.com/cucumber/cucumber-js))
* Assertions: [Chai](http://chaijs.com) and [Chai Smoothie](https://www.npmjs.com/package/chai-smoothie)
* Non-Functional testing: [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
* Ad-hoc load testing: [Artillery](https://artillery.io/)

#### Prerequisites

* To run the regression tests Node.js is required https://nodejs.org/en/. 

* The application under test is: [Sample Computer Database](http://computer-database.herokuapp.com/computers). 
This application needs to be available in order for the tests to run. Sometimes the application is down (503 response).

#### Setup
Run the following commands from the project root:
```bash
npm i
```
#### Run regression tests
The e2e tests are run headless in Google Chrome (using Chrome Mobile Simulation for the mobile devices).
* Desktop
* Nexus 7
* iPhone 4
* iPad

___
##### Known errors:
* the ordering of tables is broken, after clicking a table header to order that column the data is not ordered.

*Known errors are tagged by @bug, they are excluded from the regression test until the are fixed.*
___

To run these e2e regression tests:
```bash
npm run test:e2e
```

The reports of the regression tests can be found in de reports directory.
```bash
/reports/e2e/index.html
```

#### Run non-functional tests
To get some non-functional feedback, run Google lighthouse.
```bash
npm run test:lighthouse
```
#### Run load tests
To run an ad-hoc load test run artillery.
```bash
npm run test:artillery
```

#### Run HTML validator
To run a w3c HTML validator against the computer database site.
```bash
npm run test:validate-html
```

## Manual test cases
A PDF file with manual test cases can be found here:
```bash
/manual/TestCases.pdf
```

## Todo
* Make the e2e regression tests for the different device simulations run parralel. When I do this now, the reporting is broken.