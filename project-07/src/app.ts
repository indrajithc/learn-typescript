import { plainToClass } from "class-transformer";
import "reflect-metadata";
import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.44 },
  { title: "A Book", price: 10.44 },
];

// const p1 = new Product("A Book", 3.22);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
