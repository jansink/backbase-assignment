// baseUrl of application under test
let baseUrl = 'http://computer-database.herokuapp.com/computers';

exports.config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: baseUrl,
    maxSessions: 1,
    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                args: ['--headless', '--disable-gpu', '--disable-popup-blocking', '--window-size=1360x768', '--no-sandbox', '--auto-ssl-client-auth']
            },
            metadata: {
                browser: {
                    name: 'chrome',
                    // version: '58'
                },
                device: 'Desktop',
                platform: {
                    name: 'Windows',
                    version: process.platform
                }
            },
        },
        {
            browserName: 'chrome',
            chromeOptions: {
                args: ['--headless', '--disable-gpu', '--disable-popup-blocking', '--no-sandbox', '--auto-ssl-client-auth'],
                mobileEmulation: {
                    'deviceName': 'Nexus 7'
                },
            },
            metadata: {
                browser: {
                    name: 'chrome',
                    // version: '58'
                },
                device: 'Mobile (Nexus 7)',
                platform: {
                    name: 'Android',
                    version: process.platform
                }
            },
        },
        {browserName: 'chrome',
            chromeOptions: {
                args: ['--headless', '--disable-gpu', '--disable-popup-blocking', '--no-sandbox', '--auto-ssl-client-auth'],
                mobileEmulation: {
                    'deviceName': 'iPhone 4'
                },
            },
            metadata: {
                browser: {
                    name: 'chrome',
                    // version: '58'
                },
                device: 'Mobile-small (iPhone 4)',
                platform: {
                    name: 'iOS',
                    version: process.platform
                }
            },
        },
        {
            browserName: 'chrome',
            chromeOptions: {
                args: ['--headless', '--disable-gpu', '--disable-popup-blocking', '--no-sandbox', '--auto-ssl-client-auth'],
                mobileEmulation: {
                    'deviceName': 'iPad'
                },
            },
            metadata: {
                browser: {
                    name: 'chrome',
                    // version: '58'
                },
                device: 'Tablet (iPad)',
                platform: {
                    name: 'iOS',
                    version: process.platform
                }
            },
        },
    ],
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
