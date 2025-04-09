// CORE DATA TYPES IN TS ARE --
// number
// string
// boolean


function add (a: number, b: number, printResult: boolean) {
    if(printResult) {
        console.log(`The sum of ${a} and ${b} is: ${a + b}`);
    }else{
        return a + b;
    }
    
}

const a = 20;
const b = 30;
const printResult = true;

add(a, b, printResult);




