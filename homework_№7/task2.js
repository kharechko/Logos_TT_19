
let MyMath = new Object();
MyMath.a = 5;
MyMath.b = 2;
 
MyMath.sum = function() {
     return console.log(this.a + this.b)
     
}

MyMath.multiplication = function() {
   return console.log(this.a * this.b)
}

MyMath.division = function() {
     return console.log(this.a / this.b)
     
}
MyMath.substraction = function() {
     return console.log(this.a - this.b)
}

MyMath.sum()
MyMath.multiplication()
MyMath.division()
MyMath.substraction()