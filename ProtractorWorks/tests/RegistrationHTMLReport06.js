describe('Testing Registration Form', () => {
    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get("http://probits.in/angular/RegForm.html");
    });

    it('Sending text box fields ', () => {
        element(by.id('inputEmail')).sendKeys("hello@gmail.com"); 
        element(by.id('inputPassword')).sendKeys("secret333"); 
        element(by.id('confirmPassword')).sendKeys("secret3333"); 


        /* // selecting the months 
        element.all(by.css("#monthOfBirth option")).
                then(function(items){
        console.log("Months in the drop down... ")

        for(i=0; i<items.length; i++){
            items[i].getText().then(function(text){
                console.log(text)
            })
        }
        }) */

        // same  as above but getting the value 
        element.all(by.css("#monthOfBirth option"))
            .then(function(items){
                for(i=0; i<items.length; i++){
                    items[i].getAttribute("value").
                        then(function(text){
                            console.log(text)
                        })
                }
            })

        // 1. way 
        element(by.id('monthOfBirth')).
            element(by.css("[value='jun']")).click(); 

            browser.driver.sleep(3000); 

            // 2. way 
            element(by.id('monthOfBirth')).
            $("[value='jul']").click(); 

            browser.driver.sleep(4000); 

    });


});