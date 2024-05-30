import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';

const generateMathActAndAnswer = (randomMathAct, randomNum1, randomNum2) => {
  let mathAct = '';
  let answer = '';
  if (randomMathAct === 0) {
    answer = randomNum1 + randomNum2;
    mathAct = '+';
  } else if (randomMathAct === 1) {
    answer = randomNum1 - randomNum2;
    mathAct = '-';
  } else {
    answer = randomNum1 * randomNum2;
    mathAct = '*';
  }
  return [mathAct, answer];
};

const generateAnswerAndQuestion = () => {
  const randomNum1 = generateRandomNum(100, 1);
  const randomNum2 = generateRandomNum(100, 1);
  const randomMathAct = generateRandomNum(3, 0);

  const mathActAndAnswer = generateMathActAndAnswer(randomMathAct, randomNum1, randomNum2);

  const gameQuestion = `Question: ${randomNum1} ${mathActAndAnswer[0]} ${randomNum2}`;
  const answer = String(mathActAndAnswer[1]);

  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const generalQuestion = 'What is the result of the expression?';
const launchBrainCalc = () => {
  gameLogic(generalQuestion, generateAnswerAndQuestion);
};

export default launchBrainCalc;
