function findMax(...tab) {
  
  let x = tab[0];
  
  for(let i=1; i<=tab.length; i++){
    
    if (tab[i] > x)
      x = tab[i];    
  }
  
  return x;
  
}