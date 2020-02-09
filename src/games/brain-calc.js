import getRandom from '../index.js';
import makeGame from '../utils.js';

const calcData = () => {
  const sign = '+-*'[getRandom(3)];
  const a = getRandom(100);
  const b = getRandom(100);
  const question = `${a} ${sign} ${b}`;
  let solution;
  if (sign === '+') {
    solution = a + b;
  } else if (sign === '-') {
    solution = a - b;
  } else {
    solution = a * b;
  }
  const gameData = [question, solution.toString()];
  return gameData;
};
const brainCalc = () => {
  const rule = 'What is the result of the expression?';
  makeGame(rule, calcData);
};

export default brainCalc;
