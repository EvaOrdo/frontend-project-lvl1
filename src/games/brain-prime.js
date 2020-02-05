import { getRandom, makeGame } from '../index.js';
const primeData = () => {
    let question = getRandom(100);
    let solution;
    for (let i = 2; i < Math.sqrt(question); i += 1) {
        if (question % i === 0) {
            solution = "no";
            break;
        } else {
            solution = "yes";
        }
    }
    let gameData = [];
    gameData.push(question);
    gameData.push(solution);
    return gameData;
};

export const brainPrime = () => {
    makeGame('Answer "yes" if given number is prime. Otherwise answer "no"', primeData);
};