// Events on buttons
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', logHandler);

const PLAYER_ATK_DMG = 10;
const STRONG_ATK_DMG = 20;
const MONSTER_ATK_DMG = 17;
const HEAL_HEALTH = 30;

// Log event constents
const LOG_EVENT_MONSTER_HIT = "Monster Attacked";
const LOG_EVENT_PLAYER_HIT = "Player Attacked";
const LOG_EVENT_PLAYER_HEALED = "Player Healed";
const LOG_EVENT_PLAYER_WON = "Player Won";
const LOG_EVENT_PLAYER_LOSE = "Player Lose";
const LOG_EVENT_GAME_DRAW = "Game Draw";

let maxLife;

// get the max life value from user
maxLife = +prompt("Enter max life value: ", 100);
if (isNaN(maxLife) || maxLife <= 0)
{
  maxLife = 100;
}

let currentMonsterLife = maxLife;
let currentPlayerLife = maxLife;

let hasBonusLife = true;

// win and lose count
let loseCount = 0;
let winCount = 0;

// log entries
let logEntries = [];

adjustHealthBars(maxLife);


function increaseLoseCount() {
  loseCountEl.textContent = ++loseCount;
}

function increaseWinCount() {
  winCountEl.textContent = ++winCount;
}

function reset() 
{
  currentMonsterLife = maxLife;
  currentPlayerLife = maxLife;
  resetGame(maxLife); 
}

function damageFromMonster() 
{
  let initalPlayerValue = currentPlayerLife;

  if (currentMonsterLife > 0)
  {
    const playerDamage = dealPlayerDamage(MONSTER_ATK_DMG);
    currentPlayerLife -= playerDamage;
    eventLog(LOG_EVENT_MONSTER_HIT, currentPlayerLife, currentMonsterLife, playerDamage);
  }

  if (currentPlayerLife <= 0 && hasBonusLife)
  {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerLife += initalPlayerValue;
    increasePlayerHealth(initalPlayerValue);
  }

  if (currentMonsterLife <= 0 && currentPlayerLife <= 0)
  {
    alert("Game draw!");
    eventLog(LOG_EVENT_GAME_DRAW , currentPlayerLife, currentMonsterLife, 0);
    reset();
  }
  else if (currentMonsterLife <= 0)
  {
    alert("You won!");
    eventLog(LOG_EVENT_PLAYER_WON , currentPlayerLife, currentMonsterLife, 0);
    increaseWinCount();
    reset();
  }
  else if (currentPlayerLife <= 0)
  {
    alert("You lose!");
    eventLog(LOG_EVENT_PLAYER_LOSE , currentPlayerLife, currentMonsterLife, 0);
    increaseLoseCount();
    reset();
  }
}

function attackMonster(mode) 
{
  let maxDamage;

  if (mode === 'ATTACK')
    maxDamage = PLAYER_ATK_DMG;
  else if (mode === 'STRONG')
    maxDamage = STRONG_ATK_DMG;

  if (currentPlayerLife > 0)
  {
    const monsterDamage = dealMonsterDamage(maxDamage);  
    currentMonsterLife -= monsterDamage;
    eventLog(LOG_EVENT_PLAYER_HIT, currentPlayerLife, currentMonsterLife, monsterDamage);
  }
  damageFromMonster();
}

function attackHandler() 
{
  attackMonster('ATTACK');
}

function strongAttackHandler()
{
  attackMonster('STRONG');
}

function healHandler() 
{
  if (currentPlayerLife >= maxLife - HEAL_HEALTH)
  {
    currentPlayerLife = maxLife;
    increasePlayerHealth(maxLife);
  }
  else
  {
    currentPlayerLife += HEAL_HEALTH;
    increasePlayerHealth(HEAL_HEALTH);
  }
  eventLog(LOG_EVENT_PLAYER_HEALED , currentPlayerLife, currentMonsterLife, 0);
  damageFromMonster();
}

function eventLog(event, playerHealth, monsterHealth, damage)
{
  let logEntry = {
    event: event,
    playerHealth: playerHealth,
    monsterHealth: monsterHealth,
    damage: damage
  };
  logEntries.push(logEntry);
}

function logHandler() 
{
  console.log(logEntries);
}