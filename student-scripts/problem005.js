function strangeSum (a, b){
  
  if (typeof(a) != "number" || typeof(b) != "number" ){
    return null;
  }
  
  else if (a % 1 == 0 && b % 1 == 0){
  
   if (a == b)
  {
    a+=b;
    return 3*a;
  }
  else
    return a+b;
  }
  
  else 
    return null;
}
