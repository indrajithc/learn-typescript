// as used to type cast
// type casting is TS syntax
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// added ! at the end to ensure that can not be null
var sum = document.querySelector("sum");
function add(num1, num2) {
    return num1 + num2;
}
sum.addEventListener("click", function () {
    console.log(add(input1.value, input2.value));
});
