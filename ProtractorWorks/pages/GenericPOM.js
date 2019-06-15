var genericPOM = function(){
    this.getField = function(type, locator){
        if(type=="id"){
            return element(by.id(locator));
        }else if(type=="name"){
            return element(by.name(locator));
        }else if(type =="xpath"){
            return element(by.xpath(locator));
        }
    }

    this.getFieldValue = function(type, locator){
        if(type=="id"){
            return element(by.id(locator)).getAttribute("value")
                .then(function(text){
                    return text; 
                })
        } else if(type=="name"){
            return element(by.name(locator)).getAttribute("value")
                .then(function(text){
                    return text; 
                })
        }
        // we should have it for all 
    }
}

module.exports = new genericPOM(); 