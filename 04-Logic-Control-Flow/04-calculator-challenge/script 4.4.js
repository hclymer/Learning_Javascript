function calculator(num1, num2, operator) {

  switch (operator) {
    case "+":
      return num1 + num2
    case "-":
      return num1 - num2
    case "*":
      return num1 * num2
    case "/":
      return num1 / num2
    default:
      console.log("Error");
  }
}

const x = calculator(5, 2, "+")
console.log(x);