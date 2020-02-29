import getRandom from '../utils.js';
import runEngine from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};
const getGameData = () => {
  const question = getRandom(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), rightAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const runBrainPrime = () => {
  runEngine(description, getGameData);
};

export default runBrainPrime;
