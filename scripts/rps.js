const setStreakToLocal = (streak=null) => {
  localStorage.setItem('streak', JSON.stringify(streak));
}

const getStreakFromLocal = () => {
  let localData = localStorage.getItem('streak');
  const setData = localData !== null ? JSON.parse(localData) : '';
  return setData;
}

const score = {
  streak: 0,
  recordStreak: getStreakFromLocal(),
  computer: 0,
  user: 0
}

const updateRecord = () => {
  if (score.streak > score.recordStreak) {
    score.recordStreak = score.streak;
    setStreakToLocal(score.streak);
    updateScore();
  }
}

const scoreCalc = (result) => {
  if (result.includes('win')) {
    score.streak += 1;
    score.user += 1;
    updateRecord();
  } else if (result.includes('Tie')) {
    score.streak = 0;
  } else {
    score.streak = 0;
    score.computer += 1;
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
  scoreCalc(outcome);
  return outcome;
}

const updateScore = () => {
  $('#record-streak-val').html(score.recordStreak);
  $('#streak-val').html(score.streak);
  $('#user-score-val').html(score.user);
  $('#computer-score-val').html(score.computer);
}

updateScore();

$('#rock').on('click', () => {
  $('#outcome').html('');
  $('#outcome').prepend(`<h2>${rockPaperScissors('rock')}`);
  updateScore();
})

$('#paper').on('click', () => {
  $('#outcome').html('');
  $('#outcome').prepend(`<h2>${rockPaperScissors('paper')}`);
  updateScore();
})

$('#scissors').on('click', () => {
  $('#outcome').html('');
  $('#outcome').prepend(`<h2>${rockPaperScissors('scissors')}`);
  updateScore();
})

