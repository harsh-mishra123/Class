const name = prompt("Enter your name:");
const age = prompt("Enter your age:");
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
document.getElementById("output").textContent = message;