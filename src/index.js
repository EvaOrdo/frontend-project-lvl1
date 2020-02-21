import readlineSync from 'readline-sync';

const numberOfQuestions = 3;

const makeGame = (rule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(rule);
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, rightAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}". Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default makeGame;
