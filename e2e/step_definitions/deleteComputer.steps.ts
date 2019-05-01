import { Then, setDefaultTimeout } from "cucumber";
import { Homepage } from "../page_objects/HomePage.po";

const chai = require("chai");
const chaiString = require("chai-string");
const chaiSmoothie = require("chai-smoothie");

chai.use(chaiSmoothie).use(chaiString);
const expect = chai.expect;
const homepage = new Homepage();

setDefaultTimeout(60 * 1000);

Then(/^the deleted computer is not in the list of computers$/, async () => {
  await expect(homepage.deletedComputer).to.be.not.present;
});
