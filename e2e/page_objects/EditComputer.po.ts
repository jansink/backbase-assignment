import {$, by, element, ElementFinder} from 'protractor';

export class EditComputerPage {
    titleEditComputer: ElementFinder;
    buttonCancel: ElementFinder;
    buttonSaveComputer: ElementFinder;
    buttonDeleteComputer: ElementFinder;
    inputComputerName: ElementFinder;
    inputIntroductionDate: ElementFinder;
    inputDiscontinuedDate: ElementFinder;

    constructor() {
        this.titleEditComputer = element(by.xpath('//h1[contains(text(),"Edit computer")]'));
        this.buttonCancel = $('a.btn');
        this.buttonSaveComputer = $(`.btn[value='Save this computer']`);
        this.buttonDeleteComputer = $(`.btn[value='Delete this computer']`);
        this.inputComputerName = element(by.id('name'));
        this.inputIntroductionDate = element(by.id('introduced'));
        this.inputDiscontinuedDate = element(by.id('discontinued'));
    }

    selectCompany(company): ElementFinder {
        return element(by.cssContainingText('option', company));
    }
}