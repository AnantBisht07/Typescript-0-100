// Arrays, objects, typles, enum

// here we define the types of object
const employee : { id: number; name: string; age: number; position: string; skills: string[] } = {
  id: 1,
  name: "John Doe",
  age: 30,
  position: "Software Engineer",
  skills: ["TypeScript", "JavaScript", "React", "Node.js"] // only string come here.
};

console.log(employee);

// array of string
let favLanguage : string[]; 
favLanguage = ["MongoDB", "K8s", "Docker", "Linux"];
// favLanguage[1] = 20 // error: come beacause favLanguage is string array
favLanguage[1] = "Rust"; // this is correct

let favLanguage2 : any[]; // avoid this as much as you can bcz it is not type safe
favLanguage2 = ["Cassandra", 20, true, { name: "John" }]; // this is correct  


// tuple -- fixed array of types
let employee2 : [number, string, number, string, string[]]; // tuple
employee2 = [1, "Huichi", 24, "SDE", ["Python", "Swift", "Go", "Machine Learning"]];



// enum -- type safe way to define set of named constants

enum role {
  admin,
  user,
}

const person = {
  age: 21,
  skills: ["Python", "JavaScript", "Go"],
  product: ["Mac", "iPhone", "iPad"],
  role: role.admin
}
if(person.role === role.admin) {
  console.log("You are admin")
}
else {  
  console.log("You are user")
}