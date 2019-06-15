

// program to show get the data from the web table from 
// http://probits.in/angular/RegForm.html

describe('Working of web table ', () => {

    beforeEach(() => {
        browser.waitForAngularEnabled(false); 
        browser.get('http://probits.in/angular/RegForm.html');
    });
   it('to get number of rows ', (done) => {
    
        var myTable = element.all(by.xpath("/html/body/div[3]/table")); 

        // console.log("to get Rows" +myTable.all(by.css("tr")).count()); 

        expect(myTable.all(by.css("tr")).count()).toBe(7);    
        
        // displaying all rows 
        var rows = myTable.all(by.tagName('tr')).getText().then(function(text){
            console.log(text);
            return text; 
        }); 
        
        
   });
});