import getRandom from '../utils.js';
import makeGame from '../index.js';

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

const stringOfOperators = '+-*';

const getGameData = () => {
  const operator = stringOfOperators[getRandom(0, stringOfOperators.length - 1)];
  const a = getRandom(1, 100);
  const b = getRandom(1, 100);
  const question = `${a} ${operator} ${b}`;
  const rightAnswer = calculate(a, b, operator).toString();
  return [question, rightAnswer];
};

const description = 'What is the result of the expression?';

const runBrainCalc = () => {
  makeGame(description, getGameData);
};

export default runBrainCalc;
