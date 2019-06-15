var mylogin = require("../data/loginpage")

describe('Testing application to pull the data from json file ', () => {
    
    beforeEach(() => {
        browser.waitForAngularEnabled(false); 
        browser.get(mylogin.url); 
    });

    it('should login with user details ', () => {
      element(by.name(mylogin.locators.loginpage.username)).clear(); 
      element(by.name(mylogin.locators.loginpage.username))
            .sendKeys(mylogin.userdetails.values.username); 

        element(by.name(mylogin.locators.loginpage.password)).clear(); 
        element(by.name(mylogin.locators.loginpage.password)).sendKeys(
            mylogin.userdetails.values.password
        ); 

        element(by.name(mylogin.locators.loginpage.loginbtn)).click();

    });
});