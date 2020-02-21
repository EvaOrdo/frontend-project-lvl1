import getRandom from '../utils.js';
import makeGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const getGameData = () => {
  const question = getRandom(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEven = () => {
  makeGame(rule, getGameData);
};

export default runBrainEven;
