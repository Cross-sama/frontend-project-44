import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';

const brainCalc = () => {
  const randomNumber1 = generateRandomNum(100, 1);
  const randomNumber2 = generateRandomNum(100, 1);
  const randomMathAct = generateRandomNum(3, 0);

  let mathAct = '';
  let result = '';
  if (randomMathAct === 0) {
    result = randomNumber1 + randomNumber2;
    mathAct = '+';
  } else if (randomMathAct === 1) {
    result = randomNumber1 - randomNumber2;
    mathAct = '-';
  } else {
    result = randomNumber1 * randomNumber2;
    mathAct = '*';
  }

  const mathActAndResult = [mathAct, result];

  const gameQuestion = `Question: ${randomNumber1} ${mathActAndResult[0]} ${randomNumber2}`;
  const answer = String(mathActAndResult[1]);

  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const generalQuestion = 'What is the result of the expression?';

gameLogic(generalQuestion, brainCalc);

export default brainCalc;
