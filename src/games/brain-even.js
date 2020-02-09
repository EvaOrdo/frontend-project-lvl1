import getRandom from '../index.js';
import makeGame from '../utils.js';

const evenData = () => {
  const question = getRandom(100);
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
  makeGame(rule, evenData);
};

export default brainEven;
