import getRandom from '../utils.js';
import makeGame from '../index.js';

const calcData = () => {
  const sign = '+-*'[getRandom(0, 3)];
  const a = getRandom(1, 100);
  const b = getRandom(1, 100);
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
