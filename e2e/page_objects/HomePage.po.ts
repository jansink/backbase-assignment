import {$, $$, by, element, ElementFinder, browser, ElementArrayFinder} from 'protractor';

export class Homepage {
    body: ElementFinder;
    titleHomepage: ElementFinder;
    errorComputerName: ElementFinder;
    selectListCompany: ElementFinder;
    buttonAddComputer: ElementFinder;
    buttonFilter: ElementFinder;
    buttonNext: ElementFinder;
    buttonPrevious: ElementFinder;
    buttonPreviousDisabled: ElementFinder;
    messageComputerAdded: ElementFinder;
    messageComputerEdited: ElementFinder;
    firstComputerName: ElementFinder;
    deletedComputer: ElementFinder;
    inputFilter: ElementFinder;
    displayedPage: ElementFinder;
    tableComputerItems: ElementArrayFinder;
    tableComputerItemsDesc: ElementArrayFinder;

    constructor() {
        this.body = $('div.l-body');
        this.titleHomepage = $('header a');	
        this.errorComputerName = $('.clearfix.error');	
        this.selectListCompany = element(by.id('company'));	
        this.buttonAddComputer = element(by.id('add'));
        this.buttonFilter = element(by.id('searchsubmit'));
        this.buttonNext = $('.next a');
        this.buttonPrevious = $('.prev a');
        this.buttonPreviousDisabled = $('.prev.disabled a'); 
        this.messageComputerAdded = $('.alert-message.warning');
        this.messageComputerEdited = $('.alert-message.warning');
        this.firstComputerName = element.all(by.css('td a')).first();
        this.deletedComputer = element(by.xpath(`//a[contains(text(),'${browser.selectedComputer}')]`));
        this.inputFilter = element(by.id('searchbox'));
        this.displayedPage = $('.pagination .current a');
        this.tableComputerItems = $$('table');
        this.tableComputerItemsDesc = element.all(by.xpath(`//th[contains(@class, "headerSortDown")]/parent::tr/parent::thead/parent::table`));
    }

    filteredComputer(computername): ElementFinder {
        return element(by.xpath(`(//a[contains(@href, '${computername}')])[1]`));
    }

    tableHeader(header): ElementFinder {
        return element(by.xpath(`//a[contains(text(),'${header}')]`));
    }
}



