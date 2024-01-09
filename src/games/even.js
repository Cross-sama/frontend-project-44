import gameLogic from '../index.js';

const brainEven = () => {
  const randomNumber = Math.floor((Math.random() * 100) + 1);

  const correctAnswer = () => {
    let result = '';
    if (randomNumber % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return result;
  };

  const gameQuestion = `Question: ${randomNumber}`;
  const answer = correctAnswer();

  const questionAndAnswerArr = [gameQuestion, answer];
  return questionAndAnswerArr;
};

const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

gameLogic(generalQuestion, brainEven);

export default brainEven;
