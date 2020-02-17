import getRandom from '../utils.js';
import makeGame from '../index.js';

const getEvenData = () => {
  const question = getRandom(1, 100);
  let solution;
  if (question % 2 === 0) {
    solution = 'yes';
  } else {
    solution = 'no';
  }
  const gameData = [question, solution];
  return gameData;
};

const brainEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  makeGame(rule, getEvenData);
};

export default brainEven;
