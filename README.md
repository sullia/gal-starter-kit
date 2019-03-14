# gal-starter-kit
Easily get started with the Globalization Automation Library.

This starter kit is intended to be used with the Protractor automation framework. For more information about Protractor, 
visit https://www.protractortest.org/#/tutorial

## Installing the Globalization Automation Library (GAL)

The Globalization Automation Library needs to be installed before running this starter kit.
```bash
npm i glob-auto-library -D
```

## Run the starter kit
To run this starter kit, navigate to the root directory of this project and execute the following Protractor command:
```bash
protractor config.js
```

## example-test.js
```javascript
// Add the Globalization Automation Library to test
var gal = require('glob-auto-library').GalFunctions;

// Change to any url
var url = 'http://localhost:4200/';

// Path to where screenshots are saved. Set in config.js
var screenshotPath = browser.params.screenshotPath;

// Language of application being tested. Set in config.js
var language = browser.params.lang;

// XPath to parent element to be tested
var checkXPath = '/html/body';

// Place a border around any issues found on the DOM
var highlightElements = true;

// Set which GAL checks to execute
var checks = [];
checks.push(gal.HardcodeCheck());       // Detects Hardcoded Text
checks.push(gal.ClippedCheck());        // Detects Truncation/Clipped Text
checks.push(gal.CorruptionCheck());     // Detects Corrupt Characters
checks.push(gal.DateTimeCheck());       // Detects U.S. Date Formats

// Typical Protractor Test
describe('It should test GAL', function() {
    it('Should run GAL on localhost', function() {
        browser.get(url);

        // Execute GAL
        gal.runGal(
            screenshotPath,
            "Example Page",
            language,
            checkXPath,
            checks,
            highlightElements
        );
    });
});
```
