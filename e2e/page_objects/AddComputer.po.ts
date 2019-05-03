import {$, by, element, ElementFinder} from 'protractor';

export class AddComputerPage {
    titleAddComputer: ElementFinder;
    buttonCancel: ElementFinder;
    buttonCreateComputer: ElementFinder;
    inputComputerName: ElementFinder;
    inputIntroductionDate: ElementFinder;
    inputDiscontinuedDate: ElementFinder;

    constructor() {
        this.titleAddComputer = element(by.xpath('//h1[contains(text(),"Add a computer")]'));
        this.buttonCancel = $('a.btn');
        this.buttonCreateComputer = $(`.btn[value='Create this computer']`);
        this.inputComputerName = element(by.id('name'));
        this.inputIntroductionDate = element(by.id('introduced'));
        this.inputDiscontinuedDate = element(by.id('discontinued'));
    }
    selectCompany(company): ElementFinder {
        return element(by.cssContainingText('option', company));
    }
}