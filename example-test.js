var url = 'http://localhost:4200/';
var gal = require('./gal-settings');

// Simple Protractor Test
describe('It should test GAL', function() {
    it('Should navigate to GAL Test Page', function() {
        browser.get(url);
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

    it('Should navigate to the Hardcode page', function() {
        element(by.xpath('//*[@id="sideNav"]/vdl-scrollable-container/div[1]/div/div[2]/div/div[1]/vdl-sidenav-item/div[2]')).click();
        gal.takeScreenshot('Hardcode_Page', true, '/html/body/app-root/div/div[2]');
    });

    it('Should navigate to the Truncation page', function() {
        element(by.xpath('//*[@id="sideNav"]/vdl-scrollable-container/div[1]/div/div[2]/div/div[2]/vdl-sidenav-item/div[2]')).click();
        gal.takeScreenshot('Truncation_Page', true, '/html/body/app-root/div/div[2]');
    });

    it('Should navigate to the Corruption page', function() {
        element(by.xpath('//*[@id="sideNav"]/vdl-scrollable-container/div[1]/div/div[2]/div/div[3]/vdl-sidenav-item/div[2]')).click();
        gal.takeScreenshot('Corruption_Page', true, '/html/body/app-root/div/div[2]');
    });

    it('Should navigate to the Date/Time page', function() {
        element(by.xpath('//*[@id="sideNav"]/vdl-scrollable-container/div[1]/div/div[2]/div/div[4]/vdl-sidenav-item/div[2]')).click();
        gal.takeScreenshot('Date_Time_Page', true, '/html/body/app-root/div/div[2]');
    });

    it('Should navigate to the Overlapping page', function() {
        element(by.xpath('//*[@id="sideNav"]/vdl-scrollable-container/div[1]/div/div[2]/div/div[5]/vdl-sidenav-item/div[2]')).click();
        gal.takeScreenshot('Overlapping_Page', true, '/html/body/app-root/div/div[2]');
    });

    it('Should navigate to the Support page', function() {
        element(by.xpath('//*[@id="sideNav"]/vdl-scrollable-container/div[1]/div/div[3]/vdl-sidenav-item/div[2]')).click();
        gal.takeScreenshot('Overlapping_Page');
    });
});
