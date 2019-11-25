var fs = require('fs');
var language = browser.params.lang;
var gal = require('glob-auto-library').GalFunctions;
var whitelist = require('./whitelist');
var screenshotPath = browser.params.screenshotPath;
var galEnabled = browser.params.galEnabled;
var galHighlight = browser.params.galHighlight;

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
                    checks.push(gal.HardcodeCheck(whitelist.hardcodelist()));
                    checks.push(gal.DateTimeCheck(whitelist.dateFormats()));
                }
                checks.push(gal.ClippedCheck()); 
                checks.push(gal.CorruptionCheck());
            }
            if (Array.isArray(checks) && checks.length > 0) {
                gal.runGal(screenshotPath, screenshotName, language, locator, checks, galHighlight);
            }
        }
    }
}