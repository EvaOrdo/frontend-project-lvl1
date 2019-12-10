import readlineSync from 'readline-sync';

export const getName = () => {
// export default () => {
const name = readlineSync.question('May I have your name? ');
    return name;
};

