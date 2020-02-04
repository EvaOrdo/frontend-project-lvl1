import { getRandom, makeGame } from '../index.js';

const evenData = () => {
    let question = getRandom(100);
    let solution;
    if (question % 2 === 0) {
        solution = "yes";
    } else {
        solution = "no";
    } 
    let gameData = [];
    gameData.push(question);
    gameData.push(solution);
    return gameData;
};

export const brainEven = () => {
    makeGame('Answer "yes" if the number is even, otherwise answer "no".', evenData);
}; 