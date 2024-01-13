import gameLogic from '../index.js';

const brainProgression = () => {
  const firstNumOfPro = Math.floor((Math.random() * 10) + 1);
  const stepOfProg = Math.floor((Math.random() * 5) + 1);

  let x = firstNumOfPro;
  const progression = [];
  for (let i = 1; i <= 10; i += 1) {
    x += stepOfProg;
    progression.push(x);
  }

  const randomSkipInProg = Math.floor((Math.random() * 10));

  const answer = String(progression[randomSkipInProg]);

  progression[randomSkipInProg] = '..';

  const completeProg = progression.join(' ');

  const gameQuestion = `Question: ${completeProg}`;

  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const generalQuestion = 'What number is missing in the progression?';

gameLogic(generalQuestion, brainProgression);

export default brainProgression;
