var language = 'en-US';

exports.config = {
    params: {
        screenshotPath: './screenshots/',
        lang: language
    },

    framework: 'jasmine',
    specs: ['example-test.js'],

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().setPosition(0, 0);
        browser.driver.manage().window().setSize(1366, 768);
        browser.manage().timeouts().implicitlyWait(6000);
        browser.driver.manage().deleteAllCookies(); 
    },

    capabilities: {
        'browserName': 'chrome',
        'platform': 'ANY',
        'version': 'ANY',
        'chromeOptions': {
            args: ['lang=' + language, '--no-sandbox', '--test-type=browser'],
            prefs: {
                'intl': { accept_languages: language },
                'download': {
                    'prompt_for_download': false,
                    'default_directory': process.cwd() + '/tmp/'
                }
            }
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displayStacktrace: true,
        displaySpecDuration: true,
		defaultTimeoutInterval: 500000,
		isVerbose: true,
		includeStackTrace: true,
    }
}