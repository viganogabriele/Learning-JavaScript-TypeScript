const prompt = require("prompt-sync")();

const username = prompt("Enter your username: ");

if (username == "Admin") {
  const password = prompt("Enter your password: ");
  if (password == "TheMaster") {
    console.log("Welcome!");
  } else if (password == "" || password == null) {
    console.log("Canceled");
  } else {
    console.log("Wrong password");
  }
} else if (username == "" || username == null) {
  console.log("Canceled");
} else {
  console.log("I don't know you");
}
