var angularWork = function () {

    this.getName = function (name) {
        return element(by.name
            (name)).
            getAttribute('value').
            then(function (text) {
                return text.trim();
            });
    }
}

module.exports = new angularWork(); 
