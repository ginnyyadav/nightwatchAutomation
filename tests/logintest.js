module.exports = {
  'login test': function (browser) {
    browser.url(browser.launch_url);
    browser.expect.element('#username').to.be.visible;
    browser.expect.element('#password').to.be.visible;
    browser.expect.element('a[href="/signup"]').to.be.visible;
    browser.expect.element('img[alt="Tidepool"]').to.be.visible;
    browser.setValue('#username', 'webuiautomation+tandem@tidepool.org');
    browser.setValue('#password', 'amicable-postboy-hem-marinate');
    browser.useXpath();
    browser.click('//button[text()="Login"]');
  },
};
