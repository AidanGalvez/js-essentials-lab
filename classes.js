class User {
    constructor(name, role){
        this.name = name;
        this.role = role;
    }

    getDetail(){
        return this.name + " is a/an " + this.role;
    }
}

class SuperUser extends User{
    constructor(name){
        super(name, "Super User");
    }
}

const user1 = new User ("Aidan", "Student");
console.log(user1.role);
console.log(user1.getDetail());
const user2 = new SuperUser("Joseph");
console.log(user2.name);
console.log(user2.getDetail());