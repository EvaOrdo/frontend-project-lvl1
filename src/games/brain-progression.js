import getRandom from '../utils.js';
import makeGame from '../index.js';

const sequenceLength = 10;

const getGameData = () => {
  const first = getRandom(1, 20);
  const difference = getRandom(1, 10);
  const missingNumPosition = getRandom(1, 9);
  let question = '';
  const solution = first + missingNumPosition * difference;

  for (let i = 0; i < sequenceLength; i += 1) {
    let el = first + i * difference;
    if (i === missingNumPosition) {
      el = '..';
    }
    question = `${question} ${el}`;
  }
  return [question, solution.toString()];
};

const rule = 'What number is missing in the progression?';

const runBrainProgression = () => {
  makeGame(rule, getGameData);
};

export default runBrainProgression;
