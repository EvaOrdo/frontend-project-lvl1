import getRandom from '../utils.js';
import makeGame from '../index.js';

const getProgressionData = () => {
  const first = getRandom(1, 20);
  const difference = getRandom(1, 10);
  const missingNumPosition = getRandom(1, 9);
  let question = '';
  let solution;
  const sequenceLength = 10;

  for (let i = 0; i < sequenceLength; i += 1) {
    let el = first + i * difference;
    if (i === missingNumPosition) {
      solution = el;
      el = '..';
    }
    question = `${question} ${el}`;
  }
  return [question, solution];
};

const rule = 'What number is missing in the progression?';

const brainProgression = () => {
  makeGame(rule, getProgressionData);
};

export default brainProgression;
