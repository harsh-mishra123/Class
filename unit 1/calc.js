const calc = (a, b) => ({
  add: () => a + b,
  sub: () => a - b,
  mul: () => a * b,
  div: () => b !== 0 ? a / b : "div nhi ho skta",
});


const calculator = calc(5,4);
console.log("Addition:", calculator.add());
console.log("Subtraction:", calculator.sub());
console.log("Multiplication:", calculator.mul());
console.log("Division:", calculator.div());









// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter first number: ", (a) => {
//   rl.question("Enter second number: ", (b) => {

//     const calculator = calc(Number(a), Number(b));

//     console.log("Addition:", calculator.add());
//     console.log("Subtraction:", calculator.sub());
//     console.log("Multiplication:", calculator.mul());
//     console.log("Division:", calculator.div());

//     rl.close();
//   });
// });
