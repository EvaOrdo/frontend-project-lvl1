import getRandom from '../utils.js';
import makeGame from '../index.js';

const getGcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};
const getGcdData = () => {
  const a = getRandom(1, 100);
  const b = getRandom(1, 100);
  const question = `${a} ${b}`;
  const rightAnswer = getGcd(a, b).toString();
  return [question, rightAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

const runBrainGCD = () => {
  makeGame(description, getGcdData);
};

export default runBrainGCD;
