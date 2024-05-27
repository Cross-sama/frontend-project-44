const generateMathActAndAnswerForBrainCalc = (randomNumber1, randomNumber2, randomMathAct) => {
  let mathAct = '';
  let answer = '';
  if (randomMathAct === 0) {
    answer = randomNumber1 + randomNumber2;
    mathAct = '+';
  } else if (randomMathAct === 1) {
    answer = randomNumber1 - randomNumber2;
    mathAct = '-';
  } else {
    answer = randomNumber1 * randomNumber2;
    mathAct = '*';
  }
  return [mathAct, answer];
};

export default generateMathActAndAnswerForBrainCalc;
