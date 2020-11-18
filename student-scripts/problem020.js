Square = function(a){
  this.a = a;
  this.getArea = function(){
    return this.a * this.a;
  }
  this.getPerimeter = function(){
    return 4 * this.a;
  }
return this;
}

B = Square(5);
console.log(B.a);
console.log(B.getArea());
console.log(B.getPerimeter());