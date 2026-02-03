const prompt = require("prompt-sync")();

const inputName = prompt("What is the “official” name of JavaScript? ");
let output =  inputName == "ECMAScript" ? "Right" : "You don’t know? ECMAScript!";
console.log(output);