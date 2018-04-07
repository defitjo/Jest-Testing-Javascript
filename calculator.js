// Using Class
class calculator {
  constructor(add, subtract, multiply, divide) {
    this.add      = (a, b) => (a + b);
    this.subtract = (a, b) => (a - b);
    this.multiply = (a, b) => (a * b);
    this.divide   = (a, b) => (a / b);
  }
}

/*
// Using factory functions
const caluculator = () => {
  const add      = (a, b) => (a + b);
  const subtract = (a, b) => (a - b);
  const multiply = (a, b) => (a * b);
  const divide   = (a, b) => (a / b);
} */

module.exports = calculator;
