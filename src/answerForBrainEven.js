const generateAnswerForBrainEven = (randomNum) => {
  let answer = '';
  if (randomNum % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return answer;
};

export default generateAnswerForBrainEven;

/*   let answer = '';
  if (randomNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
*/
