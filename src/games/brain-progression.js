import getRandom from '../utils.js';
import runEngine from '../index.js';

const progressionLength = 10;
const makeProgression = (startNum, diff, missingPosition) => {
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    let el = startNum + i * diff;
    if (i === missingPosition) {
      el = '..';
    }
    progression = `${progression} ${el}`;
  }
  return progression.trim();
};

const getGameData = () => {
  const firstElement = getRandom(1, 20);
  const difference = getRandom(1, 10);
  const missingElementPosition = getRandom(0, progressionLength - 1);

  const question = makeProgression(firstElement, difference, missingElementPosition);
  const rightAnswer = firstElement + missingElementPosition * difference;

  return [question, rightAnswer.toString()];
};

const description = 'What number is missing in the progression?';

const runBrainProgression = () => {
  runEngine(description, getGameData);
};

export default runBrainProgression;
