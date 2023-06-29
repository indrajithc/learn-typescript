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

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
//   { name: "Max", hobbies: ["Reading"] },
//   { age: 30 },
// );
const mergedObj = merge({ name: "Max", hobbies: ["Reading"] }, { age: 30 });

console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionTex = "Got no value.";
  if (element.length === 1) {
    descriptionTex = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionTex = "Got  " + element.length + " elements.";
  }
  return [element, descriptionTex];
}

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
) {
  return "Value:" + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) > -1) {
      this.data.splice(this.data.indexOf(item), 1);
    }
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Max");
textStorage.addItem("Max");
textStorage.addItem("Max");
textStorage.removeItem("Max");

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();

const maxData = { name: "Max" };

objStorage.addItem({ name: "Nmae" });
objStorage.addItem(maxData);

objStorage.removeItem(maxData);

console.log(objStorage.getItems());
