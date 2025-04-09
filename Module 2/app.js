// Arrays, objects, typles, enum
// here we define the types 
// arrays of object
var employee = {
    id: 1,
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
    skills: ["TypeScript", "JavaScript", "React", "Node.js"] // only string come here.
};
console.log(employee);
// array of string
var favLanguage;
favLanguage = ["MongoDB", "K8s", "Docker", "Linux"];
// favLanguage[1] = 20 // error: come beacause favLanguage is string array
favLanguage[1] = "Rust"; // this is correct
var favLanguage2; // avoid this as much as you can bcz it is not type safe
favLanguage2 = ["Cassandra", 20, true, { name: "John" }]; // this is correct  
// tuple -- fixed array of types
var employee2; // tuple
employee2 = [1, "Huichi", 24, "SDE", ["Python", "Swift", "Go", "Machine Learning"]];
// enum -- type safe way to define set of named constants
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["user"] = 1] = "user";
})(role || (role = {}));
var person = {
    age: 21,
    skills: ["Python", "JavaScript", "Go"],
    prdouct: ["Mac", "iPhone", "iPad"],
    role: role.admin
};
if (person.role === role.admin) {
    console.log("You are admin");
}
else {
    console.log("You are user");
}
