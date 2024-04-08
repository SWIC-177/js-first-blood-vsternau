function createScoreIncrementer(incrementAmount) {
  return function (score) {
    return score + incrementAmount;
  };
}

const incrementBy3 = createScoreIncrementer(3);
let score = 0;
score = incrementBy3(score); // score is now 3
