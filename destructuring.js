// Object
const user = {
    id: 903292,
    name: "Aidan",
    email: "email.com",
    role: "student"
}

function getRole({name,role}) {
    console.log(name + " is a/an " + role);
}

getRole(user);

//const name = user.name;
//const email = user.email;

const {id, name: contact, email, role = 'Temp'} = user;
console.log("");
console.log(role);
console.log("");

// Array
const rgb = [255,128,0];

const [, , blue] = rgb;

console.log(blue);
console.log("");
