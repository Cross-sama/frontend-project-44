import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';
import isPrime from '../isPrimeNum.js';

const generateQuestionAndAnswerForBrainPrime = () => {
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

gameLogic(generalQuestion, generateQuestionAndAnswerForBrainPrime);

export default generateQuestionAndAnswerForBrainPrime;
