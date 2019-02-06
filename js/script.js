// GLOBAL SCOPE

// MAIN INPUT USER GLOBAL SCOPE
const grabMainInputUser = document.querySelector('.main-input-user');
const grabButton = document.querySelector('#button');

// MAIN INTRO DIV CLASS THAT HOLDS ELEMENT H2
const grabMainIntro = document.querySelector('.main-intro');

// body
const body = document.querySelector('body');





  //THIS FUNCTION WILL REMOVE ONLY WELCOME INTRO
function clickKapow() {
  createNewInstruction();
  removeWelcomeIntro();
  newButton();

}
grabButton.addEventListener('click', clickKapow);

function removeWelcomeIntro() {
  const welcomeIntro = document.querySelector('#welcome'); //THIS IS THE FUNCTION THAT CLICKKAPOW WILL CALL.
  welcomeIntro.remove();
  grabButton.remove();
  grabButton.removeEventListener('click', clickKapow);
}


function createNewInstruction() {
  const newInstructionIntro = document.createElement('h2');
  newInstructionIntro.setAttribute('id', 'instruction');
  newInstructionIntro.innerHTML = 'Welcome Great Shinobi';
  grabMainIntro.appendChild(newInstructionIntro);
  const newInstructionDes = document.createElement('p');
  newInstructionDes.setAttribute('id', 'instruction-desc');
  newInstructionDes.innerHTML = `<p>You are the next great ninja shooter. Destroy as many bananas as you can within the time limit given to you to become the master ninja. <br> Watchout for those bombs! Hit KaPOW to start</p>`
  grabMainIntro.appendChild(newInstructionDes);
}



function newButton() {
  const createNewButton = document.createElement('button');
  createNewButton.setAttribute('id', 'button');
  grabMainInputUser.appendChild(createNewButton);
  createNewButton.innerHTML = 'KA POW!!!'
  console.log('new button added');
  createNewButton.addEventListener('click', newButton);
}
//
// function prepareGame() {
//   const intro = document.querySelector('#instruction' 'instruction-desc'); //THIS IS THE FUNCTION THAT CLICKKAPOW WILL CALL.
//   intro.remove();
//   createNewButton.remove();
//   createNewButton.removeEventListener('click', newButton);
// }


// const newfooter = document.createElement('footer');
// newfooter.setAttribute('id', 'game-arena');
// document.body.appendChild(newfooter);


// prepareGame();


const createArena_Banana = () => {
  const createArenaDiv = document.createElement('div');
  createArenaDiv.setAttribute('id', 'arena');
  document.body.append(createArenaDiv);

  const createAnimatedBanana = document.createElement('div');
  createAnimatedBanana.setAttribute('id', 'bananas');
  createArenaDiv.appendChild(createAnimatedBanana);
}

createArena_Banana();



function movingBananaFunction() {
let position = 0;
const movingBanana = setInterval(frame, 2);

function frame(banana) {
  const grabBanana = document.querySelector('#bananas');
  if (position === 350) {
    clearInterval();
  } else {
    position++;
    grabBanana.style.bottom = position + 'px';
    // grabBanana.style.right = position + 'px';
  }
}
}
movingBananaFunction();
