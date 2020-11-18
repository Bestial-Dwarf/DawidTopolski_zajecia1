function carry(a) {
    let l = a.length;
    let tab = [];
    let cur = (...args) => (tab.push(...args) >= l) ? a(...tab.slice(0, l)) : cur;

    return cur;
}