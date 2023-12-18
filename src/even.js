import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter;
  // eslint-disable-next-line no-plusplus
  for (counter = 0; counter < 3; counter++) {
    const randomNumber = Math.floor((Math.random() * 100) + 1);

    const answerForEven = readlineSync.question(`Question: ${randomNumber}: `);

    const evenOrNot = () => {
      let result = '';
      if (randomNumber % 2 === 0) {
        result = 'yes';
      } else {
        result = 'no';
      }
      return result;
    };

    if (evenOrNot() === answerForEven) {
      console.log('Correct!');
    } else {
      console.log(`'${answerForEven}' is wrong answer ;(. Correct answer was '${evenOrNot()}'`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}.`);
  }
};

export default brainEven;
