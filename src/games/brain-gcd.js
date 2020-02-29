import getRandom from '../utils.js';
import runEngine from '../index.js';

const getGcd = (a, b) => {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
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
  runEngine(description, getGcdData);
};

export default runBrainGCD;
