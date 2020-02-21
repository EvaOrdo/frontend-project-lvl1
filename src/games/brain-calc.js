import getRandom from '../utils.js';
import makeGame from '../index.js';

const calcExpression = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return (num1 + num2).toString();
    case '-':
      return (num1 - num2).toString();
    case '*':
      return (num1 * num2).toString();
    default:
      return false;
  }
};
const getGameData = () => {
  const stringOfSigns = '+-*';
  const sign = stringOfSigns[getRandom(0, stringOfSigns.length - 1)];
  const a = getRandom(1, 100);
  const b = getRandom(1, 100);
  const question = `${a} ${sign} ${b}`;

  return [question, calcExpression(a, b, sign)];
};

const rule = 'What is the result of the expression?';

const runBrainCalc = () => {
  makeGame(rule, getGameData);
};

export default runBrainCalc;
