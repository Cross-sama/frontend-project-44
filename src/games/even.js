import generateAnswerForBrainEven from '../answerForBrainEven.js';
import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';

const generateQuestionAndAnswerForBrainEven = () => {
  const randomNumber = generateRandomNum(100, 1);

  const answer = generateAnswerForBrainEven(randomNumber);

  const gameQuestion = `Question: ${randomNumber}`;

  const questionAndAnswerArr = [gameQuestion, answer];
  return questionAndAnswerArr;
};

const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

gameLogic(generalQuestion, generateQuestionAndAnswerForBrainEven);

export default generateQuestionAndAnswerForBrainEven;
