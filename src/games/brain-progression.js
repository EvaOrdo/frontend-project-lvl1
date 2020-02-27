import getRandom from '../utils.js';
import makeGame from '../index.js';

const sequenceLength = 10;
const makeSequence = (startNum, diff, missingPosition) => {
  let sequence = '';
  for (let i = 0; i < sequenceLength; i += 1) {
    let el = startNum + i * diff;
    if (i === missingPosition) {
      el = '..';
    }
    sequence = `${sequence} ${el}`;
  }
  return sequence;
};

const getGameData = () => {
  const firstElement = getRandom(1, 20);
  const difference = getRandom(1, 10);
  const missingElementPosition = getRandom(0, sequenceLength - 1);

  const question = makeSequence(firstElement, difference, missingElementPosition);
  const rightAnswer = firstElement + missingElementPosition * difference;

  return [question, rightAnswer.toString()];
};

const description = 'What number is missing in the progression?';

const runBrainProgression = () => {
  makeGame(description, getGameData);
};

export default runBrainProgression;
