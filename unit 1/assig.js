// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// const calc = (a, b) => ({
//   add: () => a + b,
//   sub: () => a - b,
//   mul: () => a * b,
//   div: () => b !== 0 ? a / b : "div nhi ho skta",
// });

// r1.question("Enter first number: ", (a) => {
//   r1.question("Enter second number: ", (b) => {

//     const calculator = calc(Number(a), Number(b));

//     console.log("Addition:", calculator.add());
//     console.log("Subtraction:", calculator.sub());
//     console.log("Multiplication:", calculator.mul());
//     console.log("Division:", calculator.div());

//     r1.close();
//   });
// });


const calc = (a, b, op) => {
  a = Number(a);
  b = Number(b);

  switch (op) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return b !== 0 ? a / b : "div nhi ho skta";

    default:
      return "Invalid operator";
  }
};
console.log("Addition:", calc(5, 4, "+"));
console.log("Subtraction:", calc(5, 4, "-"));
console.log("Multiplication:", calc(5, 4, "*"));
console.log("Division:", calc(5, 4, "/"));
console.log("Invalid Operation:", calc(5, 4, "%"));