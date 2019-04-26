// baseUrl of application under test
let baseUrl = 'http://computer-database.herokuapp.com/computers';

exports.config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: baseUrl,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--disable-popup-blocking', '--window-size=1280x1024', '--no-sandbox', '--auto-ssl-client-auth']
        },
        metadata: {
            browser: {
                name: 'chrome',
            },
            device: 'Desktop',
            platform: {
                name: 'Windows',
                version: process.platform
            }
        },
    },
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['features/*.feature'],
    cucumberOpts: {
        'require-module': 'ts-node/register',
        strict: true,
        format: 'json:reports/e2e/protractor-report.json',
        require: ['step_definitions/*.steps.ts'],
        tags: ['@regression']
    },
    plugins: [{
        package: "protractor-multiple-cucumber-html-reporter-plugin",
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: false,
            removeOriginalJsonReportFile: false,
            reportPath: "./reports/e2e/",
            reportName: "Backbase Assignment - Computer Database Feature Dashboard",
            // pageFooter: "<div><p>${BUILD_NUMBER}</p></div>"
            pageFooter: 'Jeroen Ansink'
        }
    }]
};
