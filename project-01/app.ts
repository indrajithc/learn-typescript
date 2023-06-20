const person: {
  name: string;
  age: number;
  hobbies: string[];
  // marks as a tuple
  role: [number, string];
} = {
  name: "Indran",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: [1, "author"],
};

// push exception of ts
person.role.push("admin");

// error not a string
// person.role[1] = 10;

// Error assignment shows error but not push
// person.role = [0, "admin", "user"];

// any type
let favoriteActivities: any[];
favoriteActivities = ["Sports", 23];

for (const hobby of person.hobbies) {
  // no error on to upper case because its type of array
  console.log(hobby.toUpperCase());
}

// for a nested object

/**
 * const product = {
 *  id: "id",
 * price: 120.5,
 * tags: ["grate-offer", "hot-and-new"],
 * details : {
 *  title: "Red carpet",
 *  description: "A great carpet - almost brand-new!"
 * }
 * }
 */

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "id",
  price: 120.5,
  tags: ["grate-offer", "hot-and-new"],
  details: {
    title: "Red carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log(product);
