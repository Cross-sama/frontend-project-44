import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';

const evenOrNot = (questionNum) => {
  let answer = '';
  if (questionNum % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
};

const generateAnswerAndQuestion = () => {
  const questionNum = generateRandomNum(100, 1);

  const gameQuestion = `Question: ${questionNum}`;

  const answer = evenOrNot(questionNum);

  const questionAndAnswerArr = [gameQuestion, answer];
  return questionAndAnswerArr;
};

const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const launchBrainEven = () => {
  gameLogic(generalQuestion, generateAnswerAndQuestion);
};

export default launchBrainEven;
