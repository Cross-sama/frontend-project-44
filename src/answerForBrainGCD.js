const generateAnswerForBrainGCD = (randomNum1, randomNum2) => {
  const smaller = Math.min(randomNum1, randomNum2);
  let gcd = 1;

  for (let i = 1; i <= smaller; i += 1) {
    if (randomNum1 % i === 0 && randomNum2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

export default generateAnswerForBrainGCD;
