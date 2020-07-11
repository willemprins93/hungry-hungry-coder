# Hungry Hungry Coder

## Description

Oh no! You've been coding without a break for too long and now are weak and malnourished! Go find some food before you pass out!

## MVP (DOM - CANVAS)

Basic item collection game.

Description:

- Pick up items(food) from around the playing field to score points.
- Block obstacles prevent you from walking through them.
- Food and blocks are randomly generated each time.
- When you pick up 5 items, you win.
- Game over screen shows you "Well done!" and a button to try again.

Deliverables:

- Splash screen with project name, instructions, and start button.
- Game screen with map, player character, items.
- Game over screen with game-over text and restart button.

## Backlog

- Add a timer to beat + winScreen.
- Score counter on screen while playing.
- Custom sprites and background

## Data structure

### main.js

### game.js

### player.js

### block.js

### food.js

## States and States Transitions

### splash()

- createSplash()
- addEventListener(startGame)

### startGame()

- createGame()
- game.start()

### gameoverScreen()

- createGameOver()
- addEventListener(startGame)

## Task

- Main - splashScreen
- Main - addEventListener
- Main - createGame
- Main - removeGame
- Main - createGameOver
- Main - addEventListener
- Main - removeGameOver

- Game - startLoop
- Game - checkCollisionsToBlocks
- Game - checkCollisionsToFood
- Game - setGameOver
- Game - addEventListener

- Player - draw
- Player - updatePosition

- Block - draw

- Food - draw

## Links

### Trello

[Trello](https://trello.com/b/WDH8ph2e/hungry-hungry-coder)

### Git

[GitHub Repo](https://github.com/willemprins93/hungry-hungry-coder)
[Deploy link](https://willemprins93.github.io/hungry-hungry-coder/)

### Slides

[Presentation slides](https://docs.google.com/presentation/d/1xxxRjWQolXl_cSycCFTq3tMhnz9Agf5c3LczTCSJcGA/edit?usp=sharing)
