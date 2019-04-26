import {Given, When, Then, setDefaultTimeout} from 'cucumber';
import {browser, ExpectedConditions, protractor} from 'protractor';
import {Homepage} from '../page_objects/HomePage.po';

const chai = require('chai');
const chaiString = require('chai-string');
const chaiSmoothie = require('chai-smoothie');

chai.use(chaiSmoothie)
    .use(chaiString);
const expect = chai.expect;
const homepage = new Homepage();
const contentpage = new Contentpage();
const searchResultspage = new SearchResultspage();

setDefaultTimeout(60 * 1000);

Given(/^ a user navigates to the computer database homepage$/, async () => {
    await browser.get(browser.baseUrl);
});
