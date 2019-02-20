function sum() {
    var add=0;
    for (let i = 0; i < arguments.length; i++) {
        add += arguments[i];
    }
    return add;
}
console.log(sum(3, 5));
console.log(sum(3, -4, 5));
console.log(sum(3, 7, 6));
console.log(sum(3, 4, 5, -23, 13));

