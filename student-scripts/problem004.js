function getTotalNumberOfNewYaersEveSundays(a, b) {
  
  let x = 0;
  
  for(let i=a; i<=b; i++){
  
    let dzisiaj = new Date(i, 1-1, 1);
    
    if (dzisiaj.getDay() == 0)
      x++;
   
  
  }
  
  return x;
  
}