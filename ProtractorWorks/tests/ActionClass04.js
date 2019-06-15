
describe('Test For action classes', () => {

    beforeEach(() => {
        browser.waitForAngularEnabled(false); 
        browser.get("http://tasyah.com"); 
        browser.driver.manage().window().maximize(); 
    });


    afterEach(() => {
        browser.driver.sleep(3000); 
    });

    it('Get product price after searching', () => {
        var elementSearch = element(by.id('search_button'));
        browser.actions().mouseMove(elementSearch).perform();

        var productName = "SKU-TASACC-101"; 
        element(by.id('filter_keyword')).sendKeys(productName); 
        element(by.id('search_button')).click();

        searchedItemXpath ='//*[@id="ProductsSystem_YD9pMDOx"]/div[1]/div/div/div[2]/div[1]'; 
        element(by.xpath(searchedItemXpath)).click(); 

        var priceXpath = '//*[@id="ProductPriceSystem_IQBR326K"]/div/span'; 

        element(by.xpath(priceXpath))
            .getText().then(function(retVal){
                console.log("Price got is " + retVal); 
                var price  = retVal.substr(retVal.indexOf(".")+1, retVal.length)

                expect(price>500).toBeTruthy();

            })

    });
});






