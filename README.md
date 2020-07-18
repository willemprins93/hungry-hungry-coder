# Hungry Hungry Coder

## Description

Oh no! You've been coding without a break for too long and now are weak and malnourished! Go find some food before you pass out!

## MVP (DOM - CANVAS)

Basic item collection game.

Description:

- Pick up 5 items(food) from around the playing field before the timer runs out to win.
- Block obstacles prevent you from walking through them.
- Food and blocks are randomly generated each time.
- Blocks have one of three different colours.
- If you fail, game shows your score and you have the option to try again.

Deliverables:

- Splash screen with project name, instructions, and start button.
- Game screen with map, player character, items, blocks, timer and score.
- Win screen with win-game text, 'play again' and 'main menu' buttons.
- Game over screen with game over text, 'try again' and 'main menu' buttons.
- Custom animated sprites.

## Backlog

- Add more difficulty options.
- Add highscore board
- Add more levels
- Add more ways to die
- Create more varied animations

## Data structure

### index.html

### style.css

### main.js

### game.js

### player.js

### block.js

### food.js

### component.js

## States and States Transitions

### main.js / splashScreen()

- Canvas titlescreen
- addEventListener(startButton)

### createGame()

- new Game()
- game.init()
- game.startGame()

### loseGame()

- Canvas gameover screen
- addEventListener(tryAgain)
- addEventListener(mainMenu)

### winGame()
- Canvas winscreen
- addEventListener(playAgain)
- addEventListener(mainMenu)

## Task

- Main - splashScreen
- Main - addEventListener(startButton)
- Main - createGame
- Main - addEventListener(playAgain)
- Main - addEventListener(tryAgain)
- Main - addEventListener(mainMenu)

- Game - init
- Game - startGame
- Game - winGame
- Game - loseGame
- Game - createBlocks
- Game - createFoods
- Game - drawBackground
- Game - drawPlayer
- Game - drawBlocks
- Game - drawFoods
- Game - drawScore
- Game - drawTime
- Game - foodCollision
- Game - blockCollision
- Game - checkWin
- Game - checkLose
- Game - fourDigitString
- Game - floatAnimation
- Game - clear

- Component - drawComponent

- Player - move
- Player - checkCollision

- Block - drawBlock

- Food - checkOverlap

## Links

### Trello

[Trello](https://trello.com/b/WDH8ph2e/hungry-hungry-coder)

### Git

[GitHub Repo](https://github.com/willemprins93/hungry-hungry-coder)

[Deploy link](https://willemprins93.github.io/hungry-hungry-coder/)

### Slides

[Presentation slides](https://docs.google.com/presentation/d/1xxxRjWQolXl_cSycCFTq3tMhnz9Agf5c3LczTCSJcGA/edit?usp=sharing)
