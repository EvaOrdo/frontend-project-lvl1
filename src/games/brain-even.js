import { getRandom, isEven } from '../utils.js';
import makeGame from '../index.js';

const getEvenData = () => {
  const question = getRandom(1, 100);
 
  return [question, isEven(question) ? 'yes' : 'no'];
};

const brainEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  makeGame(rule, getEvenData);
};

export default brainEven;
