function divisible(...a) {
 
 let x = a[0];
  
  for(let i=1; i<a.length; i++){
     
    if (x % a[i] != 0)
      return false;
    
  }
  
  return true;
  
}