import generateRandomNum from './randomNum.js';

const generateQuestionAndAnswerForBrainProgression = (firstNumOfProg, stepOfProg) => {
  const progression = [];
  let stepsInProg = firstNumOfProg;
  for (let i = 1; i <= 10; i += 1) {
    stepsInProg += stepOfProg;
    progression.push(stepsInProg);
  }

  const randomSkipInProg = generateRandomNum(10, 0);

  const answer = String(progression[randomSkipInProg]);

  progression[randomSkipInProg] = '..';

  const question = progression.join(' ');

  return [question, answer];
};

export default generateQuestionAndAnswerForBrainProgression;
