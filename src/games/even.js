import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';

const brainEven = () => {
  const randomNumber = generateRandomNum(100, 1);

  let answer = '';
  if (randomNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  const gameQuestion = `Question: ${randomNumber}`;

  const questionAndAnswerArr = [gameQuestion, answer];
  return questionAndAnswerArr;
};

const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

gameLogic(generalQuestion, brainEven);

export default brainEven;
