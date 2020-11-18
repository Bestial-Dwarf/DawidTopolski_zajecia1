function compose(...b){
    b=b.reverse();
    return function f(a) {
        for(let i=0; i<b.length; i++)
          a = b[i](a);
        return a;
    }
}