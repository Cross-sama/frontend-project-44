import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const generateAnswerAndQuestion = () => {
  const randomNumber = generateRandomNum(20, 1);

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
const launchBrainPrime = () => {
  gameLogic(generalQuestion, generateAnswerAndQuestion);
};

export default launchBrainPrime;
