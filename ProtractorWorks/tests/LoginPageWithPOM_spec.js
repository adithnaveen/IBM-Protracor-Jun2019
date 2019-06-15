var loginPOM = require("../pages/LoginPagePOM"); 
var homePOM = require("../pages/HomePagePOM"); 
var genericPOM = require("../pages/GenericPOM"); 


describe('testing for login and update', () => {
    beforeEach(() => {
        loginPOM.get(); 
    });

    it('to login with valid Credentials', () => {
        loginPOM.sendEmail("adith.naveen@gmail.com"); 
        loginPOM.sendPassword("1234"); 
        loginPOM.clickLoginBtn(); 

        // it will goto home page, as of now we are hard coding 
        // the values 
        var existingName = homePOM.getName(); 
        var newName = "HARRY"; 
        homePOM.sendName(newName); 
        homePOM.sendState("Virginia"); 
        homePOM.sendCity("Reston");         
        homePOM.clickUpdate(); 
        
        browser.driver.sleep(2000); 
        // expect 
        // expect(homePOM.getName()).toEqual(newName); 
        // expect(homePOM.getName()).not.toEqual(existingName); 
    });

    afterEach(() => {
        browser.driver.sleep(4000); 
    });
});

