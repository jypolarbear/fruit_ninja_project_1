# Banana Ninja

## Link to deploy game.
 http://secret-fairies.surge.sh/

## User Stories
User will experience a lot of bananas, so many bananas all the user will think about is bananas.
Users that doesn't like bananas will love bananas when playing this banana ninja game.



## How to Install
- clone or download it as zip file
- open up index.HTML or open it up in terminal.

## Game Description:

The game is called Banana Ninja similar to the game Fruit Ninja.
The user needs to destroy as many bananas as they can until the time runs out.
The score board tracks the amount of bananas you destroyed.

## Main technology

HTML
CSS
Javascript

## Major problems

Getting infinite amount of bananas into a array and have it set inside set interval.
Making the game responsive to different view port sizes. Fruits will be in different sizes or certain width.


## MVP
- Getting the bananas pop from bottom
- Setting set time counter
- Tracking scores
- Adding event listeners to remove bananas.
- Basic layouts.

## Post MVP

Have the the option to choose weapons. The weapon will be a sword and a gun, with this sword the user will get an animation as they destroy bananas. The gun will give animation effect as well. There will be bombs as well, the user needs to avoid the bombs and only shoot the bananas. If the user shoots certain amount of bombs (3) the game resets and you lose. The game should have more funtionality of the game Fruit Ninja.

# Code Snippet
```

const bananasArr = [];

const createBanana = () => {
  bananasArr.push({ position: Math.floor(Math.random()), node: document.createElement('div') });
  bananasArr[bananasArr.length - 1].node.classList.add('bananas');
  bananasArr[bananasArr.length - 1].node.style.left = Math.random() * window.innerWidth + 'px';
  const grabDivArena = document.querySelector('#arena');
  grabDivArena.appendChild(bananasArr[bananasArr.length - 1].node);

  const numberBananasCreated = document.querySelectorAll('.bananas').length
  const bananaCreated = document.querySelectorAll('.bananas')[numberBananasCreated - 1];
};

```
This block of codes creates the element div which is assigned an attribute class called 'bananas'. This element is then pushed inside an empty array as an object with the properties, position and node. The node creates the element and position gives the element random width positions in the document window. Every time this function is called it takes out the last array and sends it into the DOM.
