const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Indran",
  age: 27,
  hobbies: ["Sports", "Cooking"],
};

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
