function calculate(num1, num2, operator) {
  return operator(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

calculate(2, 3, add); // 5
calculate(2, 3, subtract); // -1
calculate(2, 3, multiply); // 6
calculate(2, 3, divide); // 0.6666666666666666

