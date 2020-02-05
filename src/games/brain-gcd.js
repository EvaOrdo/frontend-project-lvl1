import { makeGame, getRandom } from '../index.js';

const gcdData = () => {
  let a = getRandom(100);
  let b = getRandom(100);
  const question = `${a} ${b}`;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const solution = a;
  const gameData = [];
  gameData.push(question);
  gameData.push(solution.toString());
  return gameData;
};

export const brainGCD = () => {
  makeGame('Find the greatest common divisor of given numbers.', gcdData);
};
