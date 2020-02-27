import getRandom from '../utils.js';
import makeGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const getGameData = () => {
  const question = getRandom(1, 100).toString();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEven = () => {
  makeGame(description, getGameData);
};

export default runBrainEven;
