function add(n1: number, n2: number) {
  return n1 + n2;
}

// void is the return type of the function
function printResult(num: number): void {
  console.log("Result: " + num);
}

// function printResult(num: number): undefined {
//   console.log("Result: " + num);
//   return;
// }

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// let someValue: undefined;

let combineValue: (a: number, b: number) => number;

combineValue = add;
// combineValue = printResult;
// is an error to fix this
// combineValue = 5;

console.log(combineValue(8, 8));

addAndHandle(1, 3, (result) => {
  console.log(result);
});
