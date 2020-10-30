function triangleArea(a, b, c) {
 
  var p = (a+b+c)/2;
  
  if (a <= 0 || b <= 0 || c <= 0) 
    {
      return -1;
    }
  
  else if  (a + b <= c || a + c <= b || b + c <= a) 
  
     {
       return -1;
     }
  
  else
         {
            return parseInt(Math.round(Math.sqrt(p*(p-a)*(p-b)*(p-c))*100))/100;
         }
  
}