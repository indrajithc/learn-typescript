const person: {
  name: string;
  age: number;
} = {
  name: "Indran",
  age: 27,
};

console.log(person);

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
