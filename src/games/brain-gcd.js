import { getRandom, getGcd } from '../utils.js';
import makeGame from '../index.js';

const getGcdData = () => {
  let a = getRandom(1, 100);
  let b = getRandom(1, 100);
  const question = `${a} ${b}`;
  return [question, getGcd(a, b)];
};

const brainGCD = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  makeGame(rule, getGcdData);
};

export default brainGCD;
