import getRandom from '../utils.js';
import runEngine from '../index.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      return false;
  }
};

const operators = '+-*';

const getGameData = () => {
  const operator = operators[getRandom(0, operators.length - 1)];
  const a = getRandom(1, 100);
  const b = getRandom(1, 100);
  const question = `${a} ${operator} ${b}`;
  const rightAnswer = calculate(a, b, operator).toString();
  return [question, rightAnswer];
};

const description = 'What is the result of the expression?';

const runBrainCalc = () => {
  runEngine(description, getGameData);
};

export default runBrainCalc;
