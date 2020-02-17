import { getRandom, calcExpression } from '../utils.js';
import makeGame from '../index.js';

const getCalcData = () => {
  const sign = '+-*'[getRandom(0, 3)];
  const a = getRandom(1, 100);
  const b = getRandom(1, 100);
  const question = `${a} ${sign} ${b}`;
  
  return [question, calcExpression(a, b, sign)];
};
const brainCalc = () => {
  const rule = 'What is the result of the expression?';
  makeGame(rule, getCalcData);
};

export default brainCalc;
