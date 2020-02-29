import getRandom from '../utils.js';
import runEngine from '../index.js';

const isEven = (num) => num % 2 === 0;
const getGameData = () => {
  const question = getRandom(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question.toString(), rightAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEven = () => {
  runEngine(description, getGameData);
};

export default runBrainEven;
