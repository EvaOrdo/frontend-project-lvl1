import getRandom from '../utils.js';
import makeGame from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const getPrimeData = () => {
  const question = getRandom(1, 100);
  const solution = isPrime(question);
  return [question, solution];
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const brainPrime = () => {
  makeGame(rule, getPrimeData);
};

export default brainPrime;
