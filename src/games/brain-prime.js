import { getRandom, isPrime } from '../utils.js';
import makeGame from '../index.js';

const getPrimeData = () => {
  const question = getRandom(1, 100);

  return [question, isPrime(question) ? yes : no];
};

const brainPrime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  makeGame(rule, getPrimeData);
};

export default brainPrime;
