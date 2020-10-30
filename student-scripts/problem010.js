function deepCopy(a) {
 

  if (typeof a !== "object" || a === null) {
    return a;
  }

  let b = Array.isArray(a) ? [] : {}

  for (let i in a) {
    let v = a[i]

    
    b[i] = deepCopy(v)
  }
  return b;
}