// programt to login with multiple records 
// on http://probits.in/loginapp/login.php

var Excel = require("exceljs");
var logger = require("../configs/logsconfig");
var promiseTest = require("../utilities/loginvalidate"); 

describe('Test the working of excel and login ', () => {

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get("http://probits.in/loginapp/login.php");
        // browser.ignoreSynchronization = true;

        browser.manage().timeouts().implicitlyWait(30000);

        // browser.driver.manage().window().maximize();
    });

    it('logn to the site ', (done) => {
        var workbook = new Excel.Workbook();
        var EC = protractor.ExpectedConditions;

        var fileName = "sample.xlsx";

        workbook.xlsx.readFile(fileName).then(function () {
            var workSheet = workbook.getWorksheet("logins");

            workSheet.eachRow({ includeEmpty: true }, (row, number) => {
                currRow = workSheet.getRow(number);

                var userName = currRow.getCell(1).value;
                var password = currRow.getCell(2).value;

                element(by.name('email')).sendKeys(userName);

                element(by.name('pass')).sendKeys(password);

                // // click login button 
                element(by.name('login')).click();

                expect(promiseTest.getName("name")).toEqual("IBMmm"); 

                var logoutXpath = '//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a';
                element(by.xpath(logoutXpath)).click();
                logger.log("info", "Logged out from  " + userName);
                done(); 
            })
        });



    });
}); 