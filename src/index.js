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


export const getRandom = (num) => Math.floor(Math.random()*num);

// step 6 common logic for all brain-games: 

export const makeGame = (rule, gameData) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
    console.log(rule);
    let i = 0;
    for (; i < 3; i+=1) {
        let pair = gameData();
        console.log(`Question: ${pair[0]}`);
        let answer = readlineSync.question('Your answer: ');
        if (answer === pair[1]) {
            console.log('Correct!');
            continue;
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${pair[1]}". Let's try again, ${name}`);
            break;
        }
    }
    if (i === 3) {
        console.log(`Congratulations, ${name}`);
    }
};