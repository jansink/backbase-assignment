import {Given, When, Then, setDefaultTimeout} from 'cucumber';
import {browser, ExpectedConditions, protractor} from 'protractor';
import { Homepage } from "../page_objects/HomePage.po";
import { AddComputerPage } from "../page_objects/AddComputer.po";
import { EditComputerPage } from "../page_objects/EditComputer.po";

const chai = require('chai');
const chaiString = require('chai-string');
const chaiSmoothie = require('chai-smoothie');

chai.use(chaiSmoothie)
    .use(chaiString);
const expect = chai.expect;
const homepage = new Homepage();
const addcomputerpage = new AddComputerPage();
const editcomputerpage = new EditComputerPage();

setDefaultTimeout(60 * 1000);

Given(/^a user navigates to the computer database homepage$/, async () => {
    await browser.get(browser.baseUrl);
});

When(/^the ([^"]*) button is clicked$/, async button => {
    switch (button) {
      case "create":
        await addcomputerpage.buttonCreateComputer.click();
        break;
      case "cancel":
        await addcomputerpage.buttonCancel.click();
        break;
      case "save":
        await editcomputerpage.buttonSaveComputer.click();
        break;
      case "delete":
        await editcomputerpage.buttonDeleteComputer.click();
        break;
      case "filter":
        await homepage.buttonFilter.click();
        break;
      case "next":
        await homepage.buttonNext.click();
        break;
      case "previous":
        await homepage.buttonPrevious.click();
        break;
    }
  });
