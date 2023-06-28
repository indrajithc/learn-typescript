// const names: Array<string> = []; // string // generic type
// // names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

// const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
//   { name: "Max", hobbies: ["Reading"] },
//   { age: 30 },
// );
const mergedObj = merge({ name: "Max", hobbies: ["Reading"] }, { age: 30 });

console.log(mergedObj.age);
