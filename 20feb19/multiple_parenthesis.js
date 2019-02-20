function sum(x, y) {
    if (arguments.length == 1) {
        return function (y2) {
            return a + y2;
        };
    }
    return x + y;
}
console.log(sum(3, 5));
console.log(sum(3)(4));
