import gameLogic from '../index.js';
import generateRandomNum from '../randomNum.js';

const generateProgression = (firstNumOfProg, stepOfProg) => {
  const progression = [];
  let stepsInProg = firstNumOfProg;
  for (let i = 1; i <= 10; i += 1) {
    stepsInProg += stepOfProg;
    progression.push(stepsInProg);
  }
  return progression;
};

const generateBrainProgression = () => {
  const firstNumOfProg = generateRandomNum(10, 1);
  const stepOfProg = generateRandomNum(5, 1);
  const randomSkipInProg = generateRandomNum(10, 1);

  const progression = generateProgression(firstNumOfProg, stepOfProg);

  const answer = String(progression[randomSkipInProg]);

  progression[randomSkipInProg] = '..';
  const completedProgression = progression.join(' ');

  const gameQuestion = `Question: ${completedProgression}`;

  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const generalQuestion = 'What number is missing in the progression?';
const launchBrainProgression = () => {
  gameLogic(generalQuestion, generateBrainProgression);
};

export default launchBrainProgression;
