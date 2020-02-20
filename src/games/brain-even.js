import getRandom from '../utils.js';
import makeGame from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};
const getEvenData = () => {
  const question = getRandom(1, 100);
  const answer = isEven(question);
  return [question, answer];
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  makeGame(rule, getEvenData);
};

export default brainEven;
