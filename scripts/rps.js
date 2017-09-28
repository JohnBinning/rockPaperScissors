let streak;

const streakCalc = (result) => {
  if (result.includes('win')) {
    streak += 1;
  } else {
    streak = 0;
  }
}

const rockPaperScissors = (rps) => {
  let outcome;
  const computerNum = Math.floor(Math.random() * (4 - 1)) + 1;
  let computer;
  switch(computerNum) {
    case 1:
      computer = 'rock';
      outcome = rps === 'paper' ? 'paper covers rock, you win' :'rock smashes scissors, you lose';
      break;
    case 2:
      computer = 'paper';
      outcome = rps === 'scissors' ? outcome = 'scissors cut paper, you win' : 'paper covers rock, you lose';
      break;
    case 3: 
      computer = 'scissors';
      outcome = rps === 'rock' ? outcome = 'rock smashes scissors, you win' : 'scissors cut paper, you lose';
      break;
    default:
      computer = 'rock';
  }
  if (rps === computer) {
    outcome = `Tie!  You both picked ${rps}`
  } 
  streakCalc(outcome);
  console.log(rps, '< user computer >', computer);
  return outcome;
}

$('#rock').on('click', () => {
  $('#outcome').html('');
  $('#outcome').prepend(`<h2>${rockPaperScissors('rock')}`);
})

$('#paper').on('click', () => {
  $('#outcome').html('');
  $('#outcome').prepend(`<h2>${rockPaperScissors('paper')}`);
})

$('#scissors').on('click', () => {
  $('#outcome').html('');
  $('#outcome').prepend(`<h2>${rockPaperScissors('scissors')}`);
})

