import readlineSync from 'readline-sync';

const makeGame = (rule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const pair = getGameData();
    console.log(`Question: ${pair[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === pair[1]) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${pair[1]}". Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default makeGame;
