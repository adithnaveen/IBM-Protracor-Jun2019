var genericPOM = require("./GenericPOM"); 

var loginPage = function(){
    this.get = function(){
        var url ="http://probits.in/loginapp/login.php"; 
        browser.waitForAngularEnabled(false); 
        browser.ignoreSynchronization=true;

        browser.get(url); 
    }

    this.sendEmail = function(email){
        genericPOM.getField('name', 'email').clear(); 
        genericPOM.getField('name', 'email').sendKeys(email); 

    }

    this.sendPassword = (password) => {
        element(by.name('pass')).clear();
        element(by.name('pass')).sendKeys(password); 
    }

    this.clickAdminLogin = () => {
        element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a')).click();
    }
    this.clickLogin  = () => {
        element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a')).click();
    }

    this.clickReg = () => {
        element(by.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[3]/a')).click();
    }
    this.clickLoginBtn = () =>{
        element(by.name('login')).click(); 
    }
}

module.exports = new loginPage(); 