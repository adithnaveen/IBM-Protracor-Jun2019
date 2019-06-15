var homePage = function(){
    // sending values 
    this.sendName = (name) =>{
        element(by.name('name')).clear(); 
        element(by.name('name')).sendKeys(name); 
    }
    this.sendDOB = (dob) =>{
        element(by.name('dob')).clear(); 
        element(by.name('dob')).sendKeys(dob); 
    }
    this.sendState = (state) =>{
        element(by.name('state')).clear(); 
        element(by.name('state')).sendKeys(state); 
    }
    this.sendCity = (city) =>{
        element(by.name('city')).clear(); 
        element(by.name('city')).sendKeys(city); 
    }
    this.clickUpdate = ()=>{
        element(by.name('update')).click(); 
    }

    // to get the field value of name 
    this.getName = function(){
        return element(by.name('name')).getAttribute('value')
            .then(function(text){
                console.log("name got is " + text);
                
                return text; 
            })
    }
}
module.exports  = new homePage(); 