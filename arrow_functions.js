function greet() {
    console.log("Hello!");
}

greet();

const great = (name) => {
    console.log("Wassup!? ~" + name)
    return true;
};

function meet(name) {
    console.log("Hello, " + name);
}
meet("aidan");
const val = great("aidan");
console.log(val);

function getPi(){
    return 3.14159265;
}

// implicit return
const getPi2 = () => 3.14159265;

console.log(getPi2())

function square(x) {
    return x * x;
}

const square2 = x => x*x;
console.log(square2(4));

function add(x,y) {
    return x+y;
}

const add2 = (x,y) => x+y;

console.log(add2(5,6));

console.log();
console.log();
console.log();
// ERRORS

const makeUser = name => ({name: name});

console.log(makeUser("Aidan"));


console.log();

meeting("aidan");
    // hoisting - moves functions to the top/runs functions first, arrow functions are hoisted
    // cant call arrow functions before defined
function meeting(name) {
console.log("Hello, " + name);
}

// arrow funcitons dont bind "this" keyword
const user = {
    name: "Joseph",
    greeting: () => {
        console.log("Hello, " + this.name);
    }
}
user.greeting();
console.log(user);

console.log();