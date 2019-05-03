import { When, Then, setDefaultTimeout } from "cucumber";
import { Homepage } from "../page_objects/HomePage.po";
import { AddComputerPage } from "../page_objects/AddComputer.po";

const chai = require("chai");
const chaiString = require("chai-string");
const chaiSmoothie = require("chai-smoothie");

chai.use(chaiSmoothie).use(chaiString);
const expect = chai.expect;
const homepage = new Homepage();
const addcomputerpage = new AddComputerPage();

setDefaultTimeout(60 * 1000);

Then(/^the add a computer screen is displayed$/, async () => {
  await addcomputerpage.titleAddComputer.isDisplayed();
});

When(/^the name: ([^"]*) is filled in the form$/, async computername => {
  await addcomputerpage.inputComputerName.clear();
  await addcomputerpage.inputComputerName.sendKeys(computername);
});

When(/^an introduction date: ([^"]*) is filled in the form$/, async date => {
  await addcomputerpage.inputIntroductionDate.clear();
  await addcomputerpage.inputIntroductionDate.sendKeys(date);
});

When(/^a discontinued date: ([^"]*) is filled in the form$/, async date => {
  await addcomputerpage.inputDiscontinuedDate.clear();
  await addcomputerpage.inputDiscontinuedDate.sendKeys(date);
});

When(/^a company: ([^"]*) is filled in the form$/, async company => {
  if (company === '') {
    return;
  } else {
    await addcomputerpage.selectCompany(company).click();
  }
});

Then(
  /^the ([^"]*) is ([^"]*) to the database$/,
  async (computername, added) => {
    switch (added) {
      case "added":
        await expect(await homepage.messageComputerAdded.getText()).to.equal(
          "Done! Computer " + computername + " has been created"
        );
        break;
      case "not added":
        await expect(homepage.messageComputerAdded).to.be.not.present;
        break;
    }
  }
);
