var gal = require('./galSettings');

describe('Example tests to start with GAL', function() {
    it('Should navigate to GAL Test Page', function() {
        browser.get('http://localhost:4200/');
        var browser_title = browser.getTitle().then(function(webpagetitle){
            return webpagetitle;
        });
        expect(browser_title).toEqual('GAL Test App');
    });
    it('Should switch to assigned language', function() {
        element(by.id('mnuLanguage')).click();
        browser.sleep(1000);
        element(by.id(browser.params.lang)).click();

        gal.takeScreenshot('Home_Page', true);
    });
});