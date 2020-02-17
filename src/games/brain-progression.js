import getRandom from '../utils.js';
import makeGame from '../index.js';

const progressionData = () => {
  let num = getRandom(1, 20);
  const difference = getRandom(1, 10);
  const missingNumPosition = getRandom(1, 9);
  let question = '';
  let solution;
  for (let i = 0; i < 10; i += 1) {
    if (i === missingNumPosition) {
      question += '.. ';
      solution = num.toString();
      num += difference;
    } else {
      question += `${num} `;
      num += difference;
    }
  }
  const gameData = [question, solution];
  return gameData;
};

const brainProgression = () => {
  const rule = 'What number is missing in the progression?';
  makeGame(rule, progressionData);
};

export default brainProgression;
