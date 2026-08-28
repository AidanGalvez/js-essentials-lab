// spread (...), seperates elements in an array

//array
const fruits = ["apple", "banana", "oranges"];
console.log("\n");
console.log(...fruits);
console.log("\n");

var produce = ["carrots", "spinach", fruits];
console.log(produce);
produce = ["carrots", "spinach", ...fruits];
console.log(produce);
console.log("\n");
// objects
const user = {name : "Aidan", role: "Student"};
    // sub object kinda where you can add or alter parent information in child
const onlineUser = {
    ...user,
    modality: "online",
    role: "Online Student",
}

const newUser = {
    number: "W0932902",
    gender: 'M'
}

const finalUser = {
    ...user,
    ...newUser,
}

console.log(finalUser);
console.log("\n");

// rest
// can combine data 
function average(...numbers){
    
    let total = 0;
    for (const num of numbers) {
        total += num;
    }

    console.log(total / numbers.length);
}

average(1,2,3,4);