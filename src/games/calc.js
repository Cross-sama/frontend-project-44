import gameLogic from '../index.js';

const brainCalc = () => {
  const randomNumber1 = Math.floor((Math.random() * 100) + 1);
  const randomNumber2 = Math.floor((Math.random() * 100) + 1);
  const randomMathAct = Math.floor(Math.random() * 3);

  const correctAnswer = () => {
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
    return mathActAndResult;
  };
  const randomMathActAndResult = correctAnswer();

  const gameQuestion = `Question: ${randomNumber1} ${randomMathActAndResult[0]} ${randomNumber2}`;
  const answer = String(randomMathActAndResult[1]);

  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const generalQuestion = 'What is the result of the expression?';

gameLogic(generalQuestion, brainCalc);

export default brainCalc;
