import gameLogic from '../index.js';

const brainCalc = () => {
  const randomNumber1 = Math.floor((Math.random() * 100) + 1);
  const randomNumber2 = Math.floor((Math.random() * 100) + 1);
  const randomMathAct = Math.floor(Math.random() * 3);

  const mathAction = () => {
    let result = '';
    if (randomMathAct === 0) {
      result = '+';
    } else if (randomMathAct === 1) {
      result = '-';
    } else {
      result = '*';
    }
    return result;
  };

  const correctAnswer = () => {
    let result = '';
    if (mathAction() === '+') {
      result = randomNumber1 + randomNumber2;
    } else if (mathAction() === '-') {
      result = randomNumber1 - randomNumber2;
    } else {
      result = randomNumber1 * randomNumber2;
    }
    return result;
  };

  const gameQuestion = `Question: ${randomNumber1} ${mathAction()} ${randomNumber2}`;
  const answer = String(correctAnswer());

  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const generalQuestion = 'What is the result of the expression?';

gameLogic(generalQuestion, brainCalc);

export default brainCalc;
