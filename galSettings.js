var fs = require('fs');
var language = browser.params.lang;
var gal = require('glob-auto-library').GalFunctions;
var screenshotPath = browser.params.screenshotPath;
var screensourcePath = browser.params.screensourcePath;
var galEnabled = browser.params.galEnabled;
var galHighlight = browser.params.galHighlight;
var allowedList = require('./allowedList');

module.exports = {
    takeScreenshot: function (screenshotName, invokeGal, galLocator, galChecks) {
        if (!fs.existsSync(screenshotPath)) {
            fs.mkdirSync(screenshotPath);
        }
        var languagePath = screenshotPath + '/' + language;
            if (!fs.existsSync(languagePath)) {
                fs.mkdirSync(languagePath);
            }

            invokeGal = invokeGal || false;

            if (invokeGal) {
                this.executeGAL(screenshotName, galLocator, galChecks);
            }

            gal.saveScreen(screenshotPath, screenshotName, language);
    },
    executeGAL: function (screenshotName, locator, checks) {
        if(galEnabled) {
            if (typeof (locator) === "undefined" || locator === null) {
                locator = '/html/body';
            }
            if (typeof (checks) === "undefined" || checks === null) {
                checks = [];
                if (language !== 'en-US') {
                    checks.push(gal.HardcodeCheck(allowedList.allowedHardcoded()));
                    checks.push(gal.DateTimeCheck());
                }
                checks.push(gal.ClippedCheck()); 
                checks.push(gal.CorruptionCheck(allowedList.allowedChars()));
            }
            if (Array.isArray(checks) && checks.length > 0) {
                gal.runGal(screenshotPath, screenshotName, language, locator, checks, galHighlight);
            }
        }
    }
}