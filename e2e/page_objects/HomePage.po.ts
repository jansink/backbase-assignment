import {$, by, element, ElementFinder} from 'protractor';

export class Homepage {
    bodyPrefix: string;
    body: ElementFinder;

    constructor() {
        this.bodyPrefix = 'div.l-body ';
        this.body = $('div.l-body');
    }

    link(regulationName: string): ElementFinder {
        return element(by.xpath(`//div[@class='l-body']//a[.//text()='${regulationName}']`));
    }

}