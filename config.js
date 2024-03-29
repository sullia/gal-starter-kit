var language = 'zh-CN';

exports.config = {
    params: {
        screenshotPath: './screenshots/',
        lang: language,
        galEnabled: true,
        galHighlight: true
    },

    framework: 'jasmine',
    specs: ['example-test.js'],

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(6000);
        browser.driver.manage().deleteAllCookies();

        var htmlReporter = require('protractor-beautiful-reporter');
        jasmine.getEnv().addReporter(new htmlReporter({
            baseDirectory: 'test-report',
            disableScreenshots: true,
        }).getJasmine2Reporter());

        // Deletes old report before each test run. Comment if you want to combine old test reports.
        var fs = require('fs');
        var dir = './test-report';
        if (fs.existsSync(dir)) {
            fs.rmdirSync(dir, { recursive: true });
        }
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