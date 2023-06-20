let userInput: unknown;
let userName: string;

userInput = 4;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

// never type  because ; after that nothing wil happen break the code
function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}

generateError("An error occurred!", 500);
