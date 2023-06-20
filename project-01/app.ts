enum Role {
  ADMIN = "Admin",
  READ_ONLY = "4",
  AUTHOR = "AUTHOR",
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  // marks as a tuple
  role: Role;
} = {
  name: "Indran",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// any type
let favoriteActivities: any[];
favoriteActivities = ["Sports", 23];

for (const hobby of person.hobbies) {
  // no error on to upper case because its type of array
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("Person is an author");
}
if (person.role === Role.ADMIN) {
  console.log("Person is an admin");
}
