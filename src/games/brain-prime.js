import getRandom from '../utils.js';
import makeGame from '../index.js';

const getPrimeData = () => {
  const question = getRandom(1, 100);

  const isPrime = (num) => {
    for (let i = 2; i < Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  let solution;
  if (isPrime(question) === true) {
    solution = 'yes';
  } else {
    solution = 'no';
  }
  const gameData = [question, solution];
  return gameData;
};

const brainPrime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  makeGame(rule, getPrimeData);
};

export default brainPrime;
