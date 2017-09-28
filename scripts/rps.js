const score = {
  streak: 0,
  computer: 0,
  user: 0
}

const scoreCalc = (result) => {
  console.log(result.includes('win'))
  if (result.includes('win')) {
    score.streak += 1;
    score.user += 1;
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
  $('#streak-val').html(score.streak);
  $('#user-score-val').html(score.user);
  $('#computer-score-val').html(score.computer);
  
}

const setBg = () => {
  const bgNum = Math.floor(Math.random() * (7 - 1)) + 1;
  switch(bgNum) {
    case 1:
      document.body.style.backgroundColor = 'chartreuse';
      break;
    case 2:
      document.body.style.backgroundColor = 'aqua';
      break;
    case 3: 
      document.body.style.backgroundColor = 'red';
      break;
    case 4: 
      document.body.style.backgroundColor = 'grey';
      break;
    case 5: 
      document.body.style.backgroundColor = 'orange';
      break;
    case 6: 
      document.body.style.backgroundColor = 'violet';
      break;
    default:
      document.body.style.backgroundColor = 'grey';
  }
}

$('#rock').on('click', () => {
  $('#outcome').html('');
  $('#outcome').prepend(`<h2>${rockPaperScissors('rock')}`);
  updateScore();
  // setBg();
})

$('#paper').on('click', () => {
  $('#outcome').html('');
  $('#outcome').prepend(`<h2>${rockPaperScissors('paper')}`);
  updateScore();
  // setBg();
})

$('#scissors').on('click', () => {
  $('#outcome').html('');
  $('#outcome').prepend(`<h2>${rockPaperScissors('scissors')}`);
  updateScore();
  // setBg();
})

