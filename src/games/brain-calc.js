import { getRandom, makeGame } from '../index.js';

const calcData = () => {
  const sign = '+-*';
  const a = getRandom(100);
  const b = getRandom(100);
  const question = `${a} ${sign[getRandom(3)]} ${b}`;
  const solution = eval(question);
  const gameData = [];
  gameData.push(question);
  gameData.push(solution.toString());
  return gameData;
};
export const brainCalc = () => {
  makeGame('What is the result of the expression?', calcData);
};
