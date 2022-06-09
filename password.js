const readline = require(`readline`);
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  "Welcome to password validation! Please input your password: ",
  function (input) {
    if (input.length >= 10) {
      console.log(`Password validated`);
    } else {
      console.log(
        `Password must be at least 10 characters. Please try a new password.`
      );
    }
    reader.close;
  }
);
