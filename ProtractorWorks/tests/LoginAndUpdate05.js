// program to show working of login app and updating the 
// the fields in the application and finally loggoff 

var sampleAngularWork =  require("../utilities/loginvalidate");

describe('Login and pdate on probits site', () => {
    beforeEach(() => {
        browser.waitForAngularEnabled(false); 
        browser.get("http://probits.in/loginapp/login.php"); 
        browser.driver.manage().window().maximize(); 
    });
    it('Login and update name, state, city ', () => {
        
        element(by.name('email')).sendKeys("hello@ibm.com"); 
        element(by.name('pass')).sendKeys("password"); 

        // click login button 
        element(by.name('login')).click();
        var newName = "HARRY";
        var existingName = sampleAngularWork.getName("name");
        element(by.name('name')).clear();
        element(by.name('name')).sendKeys(newName); 
        element(by.name('update')).click(); 

        var newUpdatedName = sampleAngularWork.getName("name");

        // you can expect in multiple ways 
        expect(newUpdatedName).toEqual(newName); 
        var currnetState = sampleAngularWork.getName("state");
        expect(currnetState).toEqual("Karnataka"); 
    });
});