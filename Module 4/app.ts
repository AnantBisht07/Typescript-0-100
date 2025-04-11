// functions
// return type define kr skte hain 
function add(num1: number, num2: string) : string {
    return String(num1 + num2);
}
console.log(add(10, "hello"));


// this will raise err bcz return type is different
// function add2(num1: number, num2: string) : number {
//     return num1 + num2;
// }
// console.log(add(10, "hello"));


function greet (name: string) : void {
    console.log(`hello ${name}`);
}


// callback type function
function addHandle(a:number, b:number, callback: (n:number) => void) {
    const result = a + b;
    callback(result);
}

addHandle(10,20,(result : number) => {
    console.log(result);
})