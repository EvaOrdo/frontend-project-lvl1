import { getRandom, makeGame } from '../index.js';

const calcData = () => {
    const sign = '+-*';
    let a = getRandom(100);
    let b = getRandom(100);
    let question = `${a} ${sign[getRandom(3)]} ${b}`;
    let solution = eval(question);
    let gameData = [];
    gameData.push(question);
    gameData.push(solution.toString());
    return gameData;
}
export const brainCalc = () => {
    makeGame('What is the result of the expression?', calcData);
};
