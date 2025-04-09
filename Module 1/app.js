// CORE DATA TYPES IN TS ARE --
// number
// string
// boolean
function add(a, b, printResult) {
    if (printResult) {
        console.log("The sum of ".concat(a, " and ").concat(b, " is: ").concat(a + b));
    }
    else {
        return a + b;
    }
}
var a = 20;
var b = 30;
var printResult = true;
var ans = add(a, b, printResult);
