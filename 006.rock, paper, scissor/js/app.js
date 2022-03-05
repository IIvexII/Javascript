const startBtn = document.getElementById('start-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_SELECTION = 'ROCK';

// startBtn color change
bgColorRGB(startBtn);
bgColorRGB(document.body);


startBtn.addEventListener('click', () => {
  console.log('Starting the game....');
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();

  console.log(`${computerChoice} - ${playerChoice}`);
  console.log(winner(computerChoice, playerChoice));
});


/////////////////////////////
//     Helper functions
/////////////////////////////
function getComputerChoice()
{
  const randomValue = Math.random();
  if (randomValue < 0.30)
    return ROCK;
  else if (randomValue < 0.60)
    return PAPER;
  else
    return SCISSOR 
}

function getPlayerChoice()
{
  const selection = prompt('Select from Rock, Paper, Scissor').toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR)
    return DEFAULT_SELECTION;
  else
    return selection;
}

function winner(cChoice, pChoice)
{
  if ( cChoice === pChoice)
    return 'Draw';
  else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSOR || cChoice === SCISSOR && pChoice === ROCK)
    return 'Player Win!';
  else
    return 'Computer Win!'
}

function bgColorRGB(elem)
{
  const colors = ['#2a9d8f', '#e76f51'];
  let i = 0;
  setInterval(()=>{
    if (colors.length === i)
      i = 0;

    elem.style.backgroundColor = colors[i];
    elem.style.transition = '2s ease';
    elem.style.color = 'white';
    i++;
  }, 1000);
}
