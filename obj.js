class calculator {
    constructor() {
        this.result = 0;
    }
    add(a, b) {
        this.result = a + b;
        return this;
    }
    getResult() {
        return this.result;
    }
}
calc = new calculator();
x = 5;
y = 3;
console.log("addition:" + calc.add(Number(x), Number(y)).getResult());
console.log(calc.result);
calcl = new calculator();
console.log(calcl.result)