const prompt = require("prompt-sync")();
login = prompt("Enter your Username: ");
let message;
message = login == 'Employee' ? 'Hello' : login == 'Director' ? 'Greetings' : login == '' ? 'No login' : '';
console.log(message);
