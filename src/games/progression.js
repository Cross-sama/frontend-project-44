import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';
import generateQuestionAndAnswerForBrainProgression from '../questionAndAnswerForBrainProgression.js';

const generateBrainProgression = () => {
  const firstNumOfPro = generateRandomNum(10, 1);
  const stepOfProg = generateRandomNum(5, 1);

  const questionAndAnswer = generateQuestionAndAnswerForBrainProgression(firstNumOfPro, stepOfProg);

  const gameQuestion = `Question: ${questionAndAnswer[0]}`;

  const questionsAndAnswerArr = [gameQuestion, questionAndAnswer[1]];
  return questionsAndAnswerArr;
};

const generalQuestion = 'What number is missing in the progression?';

gameLogic(generalQuestion, generateBrainProgression);

export default generateBrainProgression;
