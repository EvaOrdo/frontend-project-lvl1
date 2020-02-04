import { getRandom, makeGame } from '../index.js';
const progressionData = () => {
    let num = getRandom(20);
    let difference = getRandom(10);
    let iter = getRandom(10);
    let question = "";
    let solution;
    for (let i = 0; i < 10; i += 1) {
        if (i === iter) {
            question += ".. "
            solution = num.toString();
            num += difference;
        } else {
            question += num + " ";
            num += difference;
        }
    }
    let gameData = [];
    gameData.push(question);
    gameData.push(solution);
    return gameData;
};

export const brainProgression = () => {
    makeGame('What number is missing in the progression?', progressionData);
};