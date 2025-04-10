
// Union --> with htis we can define that it can be of 2 types.
function combine(num1: number | string, num2: number | boolean) {
    return ;
}
combine(20,20);
combine("anio", false);

// literal Types --> we make our own type
function hello(a: number, conversionType: "as-number"){
    return;
}
hello(10, "as-number");

// type alias/custom types--> through this we can define the types, like we can add in variable
type x = number | string | boolean; //here x is a type alias 
function greet(person: x){
    return;
}
greet(12);
// so instead of writing so much types, we can add one variable and store all types in that single variable.
type User = {
    name: string,
    age: number
}
const user: User = {
    name: "huoi",
    age: 21
}