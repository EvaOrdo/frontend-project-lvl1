import getRandom from '../utils.js';
import makeGame from '../index.js';

const calcExpression = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};
const getCalcData = () => {
  const sign = '+-*'[getRandom(0, 3)];
  const a = getRandom(1, 100);
  const b = getRandom(1, 100);
  const question = `${a} ${sign} ${b}`;

  return [question, calcExpression(a, b, sign)];
};

const rule = 'What is the result of the expression?';

const brainCalc = () => {
  makeGame(rule, getCalcData);
};

export default brainCalc;
