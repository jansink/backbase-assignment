import {Before, After} from 'cucumber';
import {browser, by} from 'protractor';
import * as fs from 'fs';

After( async function (scenarioResult: any) {
    if (scenarioResult.result.status === 'failed') {
        const scenarioName = scenarioResult.pickle.name.replace(/ /g, '_')
            .replace(/"/g, '')
            .replace(/'/g, '');
        const scenarioLine = scenarioResult.sourceLocation.line;
        const logfile_name = `reports/e2e/${scenarioName}-${scenarioLine}`;

        // write HTML source to file
        const rootElement = await browser.driver.findElement(by.xpath('//*'));
        await writeStringToFile(logfile_name + '-innerHTML.html', await rootElement.getAttribute('innerHTML'));

        // write DOM to file
        const pageSource = await browser.driver.getPageSource();
        await writeStringToFile(logfile_name + '-DOM.html', pageSource);

        // write screenshot to file
        const image = await browser.takeScreenshot();
        if (image == null) {
            console.log('[WARN] Screenshot failed, returned null')
        } else {
            await writeStringToFile(logfile_name + '.png', image, 'base64');
            await this.attach(image, 'image/png');
        }
    }
});

export async function writeStringToFile(filePath: string, data: string, encoding: string = 'utf8') {
    await fs.writeFile(filePath, data, encoding, async (err) => {
        if (err) {
            return await console.log(err)
        }
    })
}