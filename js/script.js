// GLOBAL SCOPE

// MAIN INPUT USER GLOBAL SCOPE
const grabMainInputUser = document.querySelector('.main-input-user');
const grabButton = document.querySelector('#button');

// MAIN INTRO DIV CLASS THAT HOLDS ELEMENT H2
const grabMainIntro = document.querySelector('.main-intro');

//Grab main header class
const grabMainHeader = document.querySelector('.main-header');

// body
const body = document.querySelector('body');


//Get score
let userScore = 0;
let grabScore;

//Set / Get timer

let userTimer = 30;
let grabTime;

//bananas Array
const bananasArr = [];
let arena;
let movingBanana;
let gameTimer;



  //THIS FUNCTION WILL REMOVE ONLY WELCOME INTRO
const clickKapow = () => {
  createNewInstruction();
  removeWelcomeIntro();
  newButton();
}


grabButton.addEventListener('click', clickKapow);

const removeWelcomeIntro = () => {
  const welcomeIntro = document.querySelector('#welcome'); //THIS IS THE FUNCTION THAT CLICKKAPOW WILL CALL.
  welcomeIntro.remove();
  grabButton.remove();
}



const createNewInstruction = () => {
  const newInstructionIntro = document.createElement('h2');
  newInstructionIntro.setAttribute('id', 'instruction');
  newInstructionIntro.innerHTML = 'Welcome Great Shinobi';
  grabMainIntro.appendChild(newInstructionIntro);
  const newInstructionDes = document.createElement('p');
  newInstructionDes.setAttribute('id', 'instruction-desc');
  newInstructionDes.innerHTML = `<p>You are the next great ninja. Destroy as many bananas as you can within the border and time limit given to you to become the master ninja. <br> Hit KaPOW to start!!</p>`
  grabMainIntro.appendChild(newInstructionDes);
}





const newButton = () => {
  const createNewButton = document.createElement('button');
  createNewButton.setAttribute('id', 'button');
  grabMainInputUser.appendChild(createNewButton);
  createNewButton.innerHTML = 'KA POW!!!'
  console.log('new button added');
  createNewButton.addEventListener('click', changeThisName);
}

const changeThisName = () => {
  let variableName = document.querySelector('#button');
  variableName.remove();
  const newInstructionIntro = document.querySelector('#instruction');
  const newInstructionDes = document.querySelector('p');
  newInstructionIntro.remove();
  newInstructionDes.remove();
  createScoreBoard();
  score();
  movingBanana = setInterval(movingFrame, 90); //RUN THIS TO HAVE BANANAS, TO START THE ACTUAL GAME.
  gameTimer = setInterval(setTimer, 1000);
}

const setTimer = () => {
  grabTime = document.querySelector('#time-set');
  userTimer--;
  grabTime.innerHTML = `${userTimer}`;
  if (userTimer === 0) {
    clearInterval(gameTimer);
    alert(`Game Over!! Your score is ${userScore}!!`);
    clearInterval(movingBanana);
  }

}

const createScoreBoard = () => {
  const getScore = document.createElement('div');
  getScore.setAttribute('id', 'realScoreTimer');
  getScore.innerHTML = `<h2>Timer</h2> <h2>Score Board</h2>`;
  grabMainIntro.appendChild(getScore);
}

const score = () => {
  const score = document.createElement('div');
  score.setAttribute('id', 'score');
  score.innerHTML = `<p id ='time-set'>30</p> <p id ='actualScores'>0</p>`;
  grabMainIntro.appendChild(score);
  grabScore = document.querySelector('#actualScores');
}






const createArena = () => {
  const createArenaDiv = document.createElement('div');
  createArenaDiv.setAttribute('id', 'arena');
  document.body.append(createArenaDiv);
  arena = createArenaDiv;
}

createArena();

const bananasPerish = (event) => {
  if (event.target.className === "bananas") {
    event.target.remove();
    userScore++;
    grabScore.innerHTML = `${userScore}`;
  }
}

arena.addEventListener("mouseover", bananasPerish)

const createBanana = () => {
  bananasArr.push({ position: Math.floor(Math.random()), node: document.createElement('div') });
  bananasArr[bananasArr.length - 1].node.classList.add('bananas');
  bananasArr[bananasArr.length - 1].node.style.left = Math.random() * window.innerWidth + 'px';
  const grabDivArena = document.querySelector('#arena');
  grabDivArena.appendChild(bananasArr[bananasArr.length - 1].node);

  const numberBananasCreated = document.querySelectorAll('.bananas').length
  const bananaCreated = document.querySelectorAll('.bananas')[numberBananasCreated - 1];
};



const movingFrame = () => {
  bananasArr.forEach(banana => {
    if (banana.position > 540) {
      banana.node.remove();
    }
    banana.position += 10;

    //changing each banana position
    banana.node.style.bottom = banana.position + 'px';
  })
  bananasArr.filter(banana => {
    return banana.position < 540;
  })
  createBanana();
}
