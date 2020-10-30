  function stringRotate(a, b) {

  
  if (b<0 ){
    return "";
  }

  else {

    var tab = [...a];
    var tab2 = [];
    var tab3 = [];  

  

    for (let i=b; i<tab.length; i++) {
       tab2[i-b] = tab[i];
  
    
    }                   


    for (let j=0; j<b; j++) {
    
      tab3[j] = tab[j]
  
 
  
      if ((j+1) == b){
        Array.prototype.push.apply(tab2,tab3);

       }
     }         

  }
  return tab2.join("");
}


