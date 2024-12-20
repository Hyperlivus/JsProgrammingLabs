function seq(fn) {
    const functions = [fn];

    function inner(nextFn) {
        if (typeof nextFn === typeof Function) {
            functions.push(nextFn);
            return inner;
        } else {
            return functions.reduce((acc, fn) => fn(acc), nextFn);
        }
    }

    return inner;
}


const result1 = seq(x => x + 7)(x => x * 2)(5);
console.log(result1);

const result2 = seq(x => x * 2)(x => x + 7)(5);
console.log(result2);

const result3 = seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7);
console.log(result3);
