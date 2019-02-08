

const letsGoButton = document.querySelector('#button');
const userName = document.querySelector('#input');
const startGame = document.querySelector('.start-game');
const grabInput = document.querySelector('input');
const mainIntro = document.querySelector('main-intro');
const main = document.querySelector('.main-content');
const buttonChild = document.querySelector('.main-input-user');
const createButton = document.createElement('button');
const gameDescription = document.createElement('h2');
let hasTimer;

// letsGoButton.addEventListener('click', (enterUsername) => {
//   enterUsername.preventDefault();
//   let input = userName.value;
//   startGame.remove();
//   grabInput.remove();
//   const gameDescription = document.createElement('h2');
//   gameDescription.classList.add('main-intro');
//   main.appendChild(gameDescription);
//   gameDescription.innerHTML = `<h2> Welcome Great Shinobi ${input}.</h2> <p> You are the next great ninja shooter.
//   Destroy as many bananas as you can within the time limit given to you to become the master ninja. <br> Watchout for those bombs! Hit KaPOW to start</p>
//   `;
//
//   gameDescription.style.marginTop = '-50px'
//   console.log(input);
// })

const arena = document.createElement('div');
arena.setAttribute('id', 'game-arena');
document.body.appendChild(arena);
arena.style.height = '650px';
arena.style.marginTop = '-650px';







const enterUsername = function(ev) {
  ev.preventDefault();
  let input = userName.value;
  letsGoButton.remove();
  startGame.remove();
  grabInput.remove();
  gameDescription.classList.add('main-intro');
  createNewButton();
  main.appendChild(gameDescription);
  gameDescription.innerHTML = `<h2> Welcome Great Shinobi ${input}.</h2> <p> You are the next great ninja shooter.
  Destroy as many bananas as you can within the time limit given to you to become the master ninja. <br> Watchout for those bombs! Hit KaPOW to start</p>
  `;
  gameDescription.style.marginTop = '-50px';
  letsGoButton.removeEventListener('click', enterUsername);
}
letsGoButton.addEventListener('click', enterUsername);


const createNewButton = function() {
  createButton.setAttribute('id', 'new-button');
  buttonChild.appendChild(createButton);
  createButton.innerHTML = 'KaPOW!!'
  createButton.style.width = '90px';
  createButton.style.height = '25px';
  createButton.style.fontSize = '13px';
  createButton.style.fontWeight = 'bold'
  createButton.style.borderRadius = '10px'
  gameDescription.remove();
  if (!hasTimer) {
    const getTimer = document.createElement('div');
    const getScore = document.createElement('div');
    getTimer.setAttribute('id', 'realTimer');
    getScore.setAttribute('id', 'realScore');
    getTimer.innerHTML = 'Hello';
    getScore.innerHTML = 'Sup';
    main.appendChild(getTimer);
    main.appendChild(getScore);
    hasTimer = true;
  }

  // createButton.remove();
  // createButton.removeEventListener('click');
}

createButton.addEventListener('click', createNewButton);


// MIGHT RUN INTO THIS PROBLEM IN THE FUTURE!!! THE EVENT LISTENER FOR KAPOW BUTTON IS LITTLE WEIRD.
// IT IS NOT REMOVING THE CREATEBUTTON EVENT LISTENER. AS YOU CAN SEE ABOVE, THERE IS NOT REMOVE EVENT LISTENER.








const createBanana = () => {
  const createAnimatedBanana = document.createElement('div');
  createAnimatedBanana.classList.add('moveBanana');
  document.body.append(createAnimatedBanana);
}
