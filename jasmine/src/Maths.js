Maths = function(num1, num2){
    this.num1 = num1; 
    this.num2 = num2; 
}

Maths.prototype.add = function(){
    return this.num1 + this.num2; 
}

Maths.prototype.sub = function(){
    return this.num1 - this.num2; 
}

