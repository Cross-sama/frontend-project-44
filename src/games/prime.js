import gameLogic from '../index.js';

const brainPrime = () => {
  const randomNumber = Math.floor((Math.random() * 20) + 1);

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  let answer = '';
  if (isPrime(randomNumber) === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  const gameQuestion = `Question: ${randomNumber}`;
  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const generalQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameLogic(generalQuestion, brainPrime);

export default brainPrime;
