describe('Test to entering theinput text and resolve promise', () => {
    
    xit('data enterd in input to be validated', () => {
        
        // open thr browser 
        browser.get("https://angularjs.org/");

        // in the text box enter the value 
        var value = "IBM"; 
        element(by.model('yourName')).sendKeys(value); 

        console.log("The data is sent to server"); 

        var retValue = element(by.binding('yourName'))
                        .getText().then(function(text){
                            console.log("Returned Text :" + text);
                            return text; 
                        })

        // browser.driver.sleep(3000); 
        console.log("log after sleep ");
                        
        expect(retValue).toEqual("Hello "+value+"!"); 

        
    });


    var url ; 

    beforeEach(() => {
        url = "http://probits.in/angular/FormValidate.html"; 
    });
    it('Validating user loging form', () => {
        browser.get(url); 

        // clear all the data 

        element(by.model('firstName')).clear(); 
        element(by.model('lastName')).clear(); 
        element(by.model('email')).clear(); 
        
        // browser.sleep(2000); 

        
        element(by.model('firstName')).sendKeys("Harry"); 
        element(by.model('lastName')).sendKeys("Peter"); 
        element(by.model('email')).sendKeys("harry@peter.com"); 
        // browser.sleep(2000); 

        
        element(by.id('submitBtn')).click();


        browser.wait(function(){
            return browser.switchTo().alert().then(
                function(alert){
                        myvar = alert.getText(); 
                   
                    expect(myvar).toEqual("Form Submitted"); 
                    
                    alert.accept();
                    return true; 
                }, 
                function(){
                    console.log("in else case. ");
                    return false; 
                }
            )
        })

        var confirmMessage = element(by.xpath('/html/body/div/form/div/div[2]'));
        expect(confirmMessage.getText()).toEqual("Form Submitted");
    });


});