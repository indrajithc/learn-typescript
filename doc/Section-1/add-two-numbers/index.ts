// as used to type cast
// type casting is TS syntax
const input1= document.getElementById("num1")! as HTMLInputElement;
const input2= document.getElementById("num2")! as HTMLInputElement;

// added ! at the end to ensure that can not be null
const sum= document.querySelector("sum")!;

function add( num1: number, num2: number) {
  return num1 + num2
}

sum.addEventListener("click", function() {
  console.log( add(input1.value, input2.value));
})