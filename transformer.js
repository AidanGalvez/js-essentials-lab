const rawUserData = [
  { id: 1, full_name: " Alex Rivera ", email: "alex.r@example.com", role: "admin", status: "active", scores: [88, 92, 95] },
  { id: 2, full_name: "jordan smith", email: "jordan.s@example.com", role: "user", status: "inactive", scores: [70, 65, 68] },
  { id: 3, full_name: " TAYLOR SWIFT ", email: "taylor.s@example.com", role: "user", status: "active", scores: [99, 100, 98] },
  { id: 4, full_name: "Morgan Lee", email: "morgan.l@example.com", role: "editor", status: "active", scores: [82, 85, 80] },
  { id: 5, full_name: "samuel green", email: "sam.g@example.com", role: "user", status: "pending", scores: [60, 62, 58] },
  { id: 6, full_name: " Casey Vance ", email: "casey.v@example.com", role: "editor", status: "inactive", scores: [78, 81, 75] },
  { id: 7, full_name: "PATRICK STAR", email: "patrick.s@example.com", role: "user", status: "active", scores: [55, 50, 60] },
  { id: 8, full_name: " Riley Quinn", email: "riley.q@example.com", role: "admin", status: "active", scores: [91, 89, 94] }
];

 // Arrow function to clean names and add average score
const cleanProfiles = (userObjects) => {
   // for each user destruct its properties into variables
  return userObjects.map( user => {
    const {full_name, scores, ...rest} = user;

     // return cleaned information about user to map
    return {
       // split the full name into seperate names and upperCase first letters
      full_name: full_name.toLowerCase().trim().split(" ")
      .map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(" "),

      ...rest,

      scores,

       // get the average score
      averageScore: +(scores.reduce(
        (accumulator, score) => {
          return (accumulator + score);
        }, 0)/ scores.length).toFixed(2)
    };

  });
};

 // arrow function that filters active users from list
const filterActiveUsers = (userList) => {
  return userList.filter(user => user.status === "active");
};

 // arrow function that updates a singular users role from a list
const updateUserRole = (userList, userId, newRole) => {
  // return new array with singular updated user role
  return userList.map( user => {
     // if user has target Id
    if (userId === user.id){
       // return targets information and update role
      return {...user, role: newRole};
    }
     // not target then return regular information
    else{
      return user;
    };
  });
};

 // arrow function to count users by role
const countUsersByRole = (userList) => {
   // for each user get their role
  return userList.map(user => user.role)
   // accumulate each role using reduce
  .reduce((role, count) => {
       // if the roles not in the accumulator add it
      if (role[count] === undefined){
        role[count] = 0;
      }
       // add one to the count
      role[count]++;
      return role;
    }, {});
};

 // arrow function to display user information cleanly
const logUserDirectory = (userList) => {
  userList.forEach(user => {
    console.log(`[ID ${user.id}] ${user.full_name} (${user.role})`,
        `- Avg Score: ${user.averageScore} `,
        `| Status: ${user.status.toUpperCase()}`);
  });
};

console.log("=== 1. Cleaned Data ===");
const cleaned = cleanProfiles(rawUserData);
console.log(cleaned);

console.log("\n=== 2. Active Users Only ===");
const activeUsers = filterActiveUsers(cleaned);
console.log(activeUsers);

console.log("\n=== 3. Updated User Role ===");
const updatedList = updateUserRole(cleaned, 2, "admin");
console.log("Original User 2 Role:", cleaned[1].role); // Should still be 'user'
console.log("Updated User 2 Role:", updatedList[1].role); // Should be 'admin'

console.log("\n=== 4. Role Counts ===");
const roleCounts = countUsersByRole(cleaned);
console.log(roleCounts);

console.log("\n=== 5. User Directory Report ===");
logUserDirectory(cleaned);