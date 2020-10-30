function deepFindAndCount(a, b) {
    let counter = 0;
    for (let obj of a) {
        if (Array.isArray(obj)) {
            counter = counter + deepFindAndCount(obj, b)
        }
        if (obj === b) {
            counter++;
        }
    }
    return counter;
}