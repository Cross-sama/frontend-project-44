import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';
import generateAnswerForBrainGCD from '../answerForBrainGCD.js';

const generateQuestionAndAnswerForBrainGcd = () => {
  const randomNum1 = generateRandomNum(20, 1);
  const randomNum2 = generateRandomNum(20, 1);
  const question = randomNum2;

  const gameQuestion = `Question: ${randomNum1} ${question}`;
  const answer = String(generateAnswerForBrainGCD(randomNum1, randomNum2));

  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const generalQuestion = 'Find the greatest common divisor of given numbers.';

gameLogic(generalQuestion, generateQuestionAndAnswerForBrainGcd);

export default generateQuestionAndAnswerForBrainGcd;
