import gameLogic from '../index.js';
import generateMathActAndAnswerForBrainCalc from '../mathActAndAnswerForBrainCalc.js';
import generateRandomNum from '../randomNum.js';

const generateQuestionAndAnswerForBrainCalc = () => {
  const randomNum1 = generateRandomNum(100, 1);
  const randomNum2 = generateRandomNum(100, 1);
  const randomMathAct = generateRandomNum(3, 0);

  const mathActAndRes = generateMathActAndAnswerForBrainCalc(randomNum1, randomNum2, randomMathAct);

  const gameQuestion = `Question: ${randomNum1} ${mathActAndRes[0]} ${randomNum2}`;
  const answer = String(mathActAndRes[1]);

  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const generalQuestion = 'What is the result of the expression?';

gameLogic(generalQuestion, generateQuestionAndAnswerForBrainCalc);

export default generateQuestionAndAnswerForBrainCalc;
