import getRandom from '../utils.js';
import makeGame from '../index.js';

const getGcdData = () => {
  let a = getRandom(1, 100);
  let b = getRandom(1, 100);
  const question = `${a} ${b}`;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const solution = a;
  const gameData = [question, solution.toString()];
  return gameData;
};

const brainGCD = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  makeGame(rule, getGcdData);
};

export default brainGCD;
