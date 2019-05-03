import { Given, When, Then, setDefaultTimeout } from "cucumber";
import { browser, ExpectedConditions, protractor } from "protractor";
import { Homepage } from "../page_objects/HomePage.po";
import { EditComputerPage } from "../page_objects/EditComputer.po";

const chai = require("chai");
const chaiString = require("chai-string");
const chaiSmoothie = require("chai-smoothie");

chai.use(chaiSmoothie).use(chaiString);
const expect = chai.expect;
const homepage = new Homepage();
const editcomputerpage = new EditComputerPage();

setDefaultTimeout(60 * 1000);

Then(/^the edit a computer screen is displayed$/, async () => {
  await editcomputerpage.titleEditComputer.isDisplayed();
});

When(/^the company: ([^"]*) is selected in the form$/, async company => {
  if (company === '') {
    return;
  } else {
    await editcomputerpage.selectCompany(company).click();
  }
});

Then(/^the ([^"]*) is ([^"]*) in the database$/, async (computername, edited) => {
  switch (edited) {
    case "edited":
      await expect(await homepage.messageComputerEdited.getText()).to.equal(
        "Done! Computer " + computername + " has been updated"
      );
      break;
    case "not edited":
      await expect(homepage.messageComputerEdited).to.be.not.present;
      break;
  }
}
);
