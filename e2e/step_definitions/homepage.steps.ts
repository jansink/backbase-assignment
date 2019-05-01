import {Given, When, Then, setDefaultTimeout} from 'cucumber';
import {browser, ExpectedConditions, protractor} from 'protractor';
import {Homepage} from '../page_objects/HomePage.po';
import {TestVariables} from '../helpers/TestVariables';

const chai = require('chai');
const chaiString = require('chai-string');
const chaiSmoothie = require('chai-smoothie');

chai.use(chaiSmoothie)
    .use(chaiString);
const expect = chai.expect;
const homepage = new Homepage();

setDefaultTimeout(60 * 1000);

Then(/^the computer database homepage is displayed$/, async () => {
    await homepage.titleHomepage.isDisplayed();
});

When(/^a user navigate to the add a computer screen$/, async () => {
    await homepage.buttonAddComputer.click();
});

When(/^a user clicks on the first computer in the list$/, async () => {
    TestVariables.selectedComputer = await homepage.firstComputerName.getText();
    await homepage.firstComputerName.click();
});

When(/^a user enters ([^"]*) as filter$/, async (computername) => {
    await homepage.inputFilter.clear();
    await homepage.inputFilter.sendKeys(computername);
});

Then(/^([^"]*) is shown in the filtered list$/, async (computername) => {
    await homepage.filteredComputer(computername).isDisplayed();
});

Then(/^the previous button ([^"]*) disabled$/, async (status) => {
    if (status === 'is'){
        await expect(homepage.buttonPreviousDisabled).to.be.present;
    } else if (status === 'is not'){
        await expect(homepage.buttonPreviousDisabled).to.be.not.present;
    }
});

Then(/^the ([^"]*) page of the computer database is shown$/, async (page) => {
    if (page === 'first'){
        await expect(await homepage.displayedPage.getText()).to.contain(
            "Displaying 1 to 10"
          );
    } else if (page === 'second'){
        await expect(await homepage.displayedPage.getText()).to.contain(
            "Displaying 11 to 20"
          );
    }
});