const user = { name: "Aidan", age: 21, fruits: ["apple", "banana", "oranges"]};
const copyUser = {...user};

copyUser.name = "Token";
copyUser.fruits[0] = "watermelon";
console.log(user);
console.log(copyUser);
