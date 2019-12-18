import readlineSync from 'readline-sync';

// step 1 greeting (on step 5 added rule as arg)

export const greeting = (rule) => {
    console.log('Welcome to the Brain Games!');
    if (rule) {
        console.log(rule);
    }
};

// step 3 using readlineSync library to get user's name

export const getName = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    return name;
};

// step 5 brain-games function

export const brainGames = () => {
    greeting();
    getName();
};

// step 5 using readlineSync lib to get user's answer

export const getAnswer = () => {
    return readlineSync.question('Your answer: ');
};

// step 5 brain-even function

export const brainEven = () => {
    greeting('Answer "yes" if the number is even, otherwise answer "no".');
    const name = getName();
    let i = 0;
    for (; i < 3; i++) {
        const number = Math.floor(Math.random(0, 1) * 100);
        console.log(`Question: ${number}`);
        const answer = getAnswer();
        if (number % 2 === 0 && answer === 'yes') {
            console.log('Correct!');
            continue;
        }
        if (number % 2 !== 0 && answer === 'no') {
            console.log('Correct!');
            continue;
        }
        else {
            console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.
        Let's try again, ${name}`);
            break;
        }
    }
    if (i === 3) {
        console.log(`Congratulations, ${name}`);
    }
};

