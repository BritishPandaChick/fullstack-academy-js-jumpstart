function isBakersDozen(guess) {
  var feedback;
  if(guess === 13) {
    feedback = "You are correct!";
    //return feedback;
  } else if (guess === 12) {
    feedback = "Close, but the wrong dozen!";
    //return feedback;
  } else {
    feedback = "Try again!";
    //return feedback;
  }
  console.log("last line in the isBakerDozen function!");
  return feedback;
}

isBakersDozen(13);
isBakerDozen(12);
isBakerDozen(15);
