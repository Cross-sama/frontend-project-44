import gameLogic from '../index.js';

const brainGcd = () => {
  const randomNumber1 = Math.floor((Math.random() * 20) + 1);
  const randomNumber2 = Math.floor((Math.random() * 20) + 1);

  let x = randomNumber1;
  let y = randomNumber2;
  const correctAnswer = () => {
    for (let i = 1; i < 2; i += 1) {
      while (x && y) {
        if (x > y) {
          x %= y;
        } else {
          y %= x;
        }
      }
      x += y;
    }
    return x;
  };

  const gameQuestion = `Question: ${randomNumber1} ${randomNumber2}`;
  const answer = String(correctAnswer());

  const questionsAndAnswerArr = [gameQuestion, answer];
  return questionsAndAnswerArr;
};

const generalQuestion = 'Find the greatest common divisor of given numbers.';

gameLogic(generalQuestion, brainGcd);

export default brainGcd;
