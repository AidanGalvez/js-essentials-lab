// STEP 1 CODE

const person = {
  name: "Rhodes",

  // Traditional method
  greetTraditional: function() {
    return `Hello, my name is ${this.name}`;
  },

  // Arrow function method
  greetArrow: () => {
    return `Hello, my name is ${this.name}`;
  }
};


console.log("Step 1a:", person.greetTraditional());
console.log("Step 1b:", person.greetArrow());

// OUTPUT
// Step 1a: Hello, my name is Rhodes
// Step 1b: Hello, my name is undefined

// EXPLANATION
// greetArrow failed because arrow functions don't bind the "this" keyword, 
// it considers name out of scope
// greetTraditional succeeded because it's a method of the person,
// so it has access to the correct scope

// -------------------------------------------------------------------------

// STEP 2 CODE
// Extracting the traditional method into a standalone variable
const standaloneGreet = person.greetTraditional;

try {
  console.log("Step 2:", standaloneGreet());
} catch (error) {
  console.log("Step 2 Error:", error.message);
}
// OUTPUT
// Step 2 Error: Cannot read properties of undefined (reading 'name')

// EXPLANATION
// The variable gets the return statement of `Hello, my name is ${this.name}`,
// but it doesn't actually get any information from the object,
// essentially turning a method of the object into a function out of scope

// -------------------------------------------------------------------------

// STEP 3 CODE
class Timer {
  constructor(name) {
    this.name = name;
  }

  // Traditional class method
  logTimeTraditional() {
    console.log(`Step 3 (${this.name}): Tick!`);
  }
}

const myTimer = new Timer("Main Timer");

// Invoking directly off the instance
myTimer.logTimeTraditional();

// Passing the method as a callback to setTimeout
setTimeout(myTimer.logTimeTraditional, 100);


// OUTPUT
// Step 3 (Main Timer): Tick!
// Step 3 (undefined): Tick!

// EXPLANATION
// myTimer.logTimeTraditional(); calling a method of the class
// setTimeout(myTimer.logTimeTraditional, 100); pass by reference
// "this" was bound to the myTimer but after setTimeout, it lost that binding

// -------------------------------------------------------------------------

// STEP 4 CODE
class FixedTimer {
  constructor(name) {
    this.name = name;
  }

  // Class field assigned to an arrow function
  logTimeArrow = () => {
    console.log(`Step 4 (${this.name}): Tick!`);
  };
}

const myFixedTimer = new FixedTimer("Fixed Timer");

// Passing the arrow method as a callback to setTimeout
setTimeout(myFixedTimer.logTimeArrow, 200);

// OUTPUT
// Step 4 (Fixed Timer): Tick!

// EXPLANATION
// The arrow function works because it's defined in the class and the
// constructor saves the name with this.name. Because it is explicitly
// bound, the arrow function can still reach it even after setTimeout