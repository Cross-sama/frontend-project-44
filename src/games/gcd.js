import gameLogic from '../index.js';

const brainGcd = () => {
  let x = Math.floor((Math.random() * 20) + 1);
  let y = Math.floor((Math.random() * 20) + 1);

  const correctAnswer = () => {
    while (y) {
      const t = y;
      y = x % y;
      x = t;
    }
    return x;
  };

  const gameQuestion = `Question: ${x} ${y}`;
  const answer = String(correctAnswer());

  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const generalQuestion = 'Find the greatest common divisor of given numbers.';

gameLogic(generalQuestion, brainGcd);

export default brainGcd;
