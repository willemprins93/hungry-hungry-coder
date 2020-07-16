class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined; 
        this.player = new Player(this, 288, 285, 25, 32);
        this.blocks = [];
        this.food = [];
        this.backgroundImg = new Image();
        this.score = 0;
        this.x = undefined;
        this.y = undefined;
        this.width = 600;
        this.height = 600;
        this.sound = new Audio("sounds/bite.mp3")
        this.music = document.getElementById('music');
        this.victory = document.getElementById('win-music');
        this.gameover = document.getElementById('gameover-music');
        this.time = 1000;
        this.spriteFloat = 1;
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.createBlocks();
        this.createFoods();
        this.startGame()
    }

    startGame() {
        let animation = undefined;
        this.drawBackground();
        this.drawBlocks();
        this.drawFoods();
        this.drawPlayer();
        this.drawScore();
        this.music.volume = 0.4;
        this.music.play()
        const loop = () => {
            animation = window.requestAnimationFrame(loop);
            this.clear()
            this.drawBackground();
            this.drawBlocks();
            this.drawFoods();
            this.drawPlayer();
            this.player.move();
            this.foodCollision();
            this.blockCollision();
            this.drawScore();
            this.drawTime();
            this.time -= 1.66; 
            this.floatAnimation();

            if(this.checkWin()){
                cancelAnimationFrame(animation);
                this.winGame();
                this.music.pause()
                this.music.currentTime = 0;

                setTimeout(() => {
                    this.victory.volume = 0.5;
                    this.victory.play();
                }, 500);
            }

            if(this.checkLose()) {
                cancelAnimationFrame(animation);
                this.loseGame();
                this.music.pause()
                this.music.currentTime = 0;
                this.gameover.volume = 0.5;
                this.gameover.play();
            }
        }
        window.requestAnimationFrame(loop);
    }

    winGame() {
        this.clear();

        document.getElementById("win").classList.toggle("toggle");

        this.ctx.fillStyle = '#1d6b3b';
        this.ctx.font = "bold italic 50px Helvetica";
        this.ctx.fillText('HURRAY, YOU LIVE!', 57, 109);

        this.ctx.fillStyle = 'white';
        this.ctx.font = "bold italic 50px Helvetica";
        this.ctx.fillText('HURRAY, YOU LIVE!', 53, 105);

        this.ctx.fillStyle = "#BC4B51";
        this.ctx.font = "20px Helvetica";
        this.ctx.fillText(`Don't forget to `, 235, 415);

        this.ctx.fillText('take a break next time!', 195, 440);

        document.getElementById("play-again").classList.toggle("toggle");

        document.getElementById("main-menu").classList.toggle("toggle");
    }

    loseGame() {
        this.clear();

        document.getElementById("gameover").classList.toggle("toggle");

        this.ctx.font = "bold italic 60px Helvetica";
        this.ctx.fillStyle = "#1d6b3b";
        this.ctx.fillText('GAME OVER', 115, 130);

        this.ctx.font = "18px Helvetica";
        this.ctx.fillStyle = "#BC4B51";
        this.ctx.fillText(`You only managed to eat ${this.score} snacks`, 155, 410);
        this.ctx.fillText(`before passing out...`, 220, 430);

        document.getElementById("try-again").classList.toggle("toggle");

        document.getElementById("main-menu").classList.toggle("toggle");
    }

    createBlocks() {
        for (let i = 0; i < 15; i++) {
            this.blocks.push(new Block(this));
        }
    }

    createFoods() { // not working yet
        while(this.food.length < 5){
            this.food.push(new Food(this));
        }

        for(let i = 0; i < this.blocks.length; i++){
            for (let j = 0; j < this.food.length; j++){
                if (this.food[j].checkOverlap(this.blocks[i])){
                    this.food.splice(j, 1, new Food(this));
                }
            }
        }

        for(let i = 0; i < this.blocks.length; i++){
            for (let j = 0; j < this.food.length; j++){
                if (this.food[j].checkOverlap(this.blocks[i])){
                    this.food.splice(j, 1, new Food(this));
                }
            }
        }

        for(let i = 0; i < this.blocks.length; i++){
            for (let j = 0; j < this.food.length; j++){
                if (this.food[j].checkOverlap(this.blocks[i])){
                    this.food.splice(j, 1, new Food(this));
                }
            }
        }

        for(let i = 0; i < this.blocks.length; i++){
            for (let j = 0; j < this.food.length; j++){
                if (this.food[j].checkOverlap(this.blocks[i])){
                    this.food.splice(j, 1, new Food(this));
                }
            }
        }
    }
    

    drawBackground() {
        this.backgroundImg.src = "images/background.png";
        this.ctx.drawImage(this.backgroundImg, 0, 0, 600, 600);
    }

    drawPlayer() {
        if(this.player.direction === 'R'){
            this.player.drawComponent(`images/character_sideright-${this.spriteFloat}.png`);
        } else if (this.player.direction === 'L'){
            this.player.drawComponent(`images/character_sideleft-${this.spriteFloat}.png`);
        } else if (this.player.direction === 'U'){
            this.player.drawComponent(`images/character_back-${this.spriteFloat}.png`);
        } else if (this.player.direction === 'D'){
            this.player.drawComponent(`images/character_front-${this.spriteFloat}.png`);
        }
    }

    drawBlocks() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].drawBlock();
        }
    }

    drawFoods() {
        for (let i = 0; i < this.food.length; i++){
            if (typeof this.food[i] === 'object'){
                this.food[i].drawComponent(`images/fruit${i}-${this.spriteFloat}.png`);
            }
        }
    }

    drawScore() {
        this.ctx.font = "20px Helvetica";
        this.ctx.fillStyle = "#BC4B51";
        this.ctx.fillText(`snacks found: ${this.score}`, 10, 25)
    }

    drawTime() {
        let timer = this.fourDigitString(this.time.toFixed(0));

        this.ctx.font = "20px Helvetica";
        this.ctx.fillStyle = "#BC4B51";
        this.ctx.fillText(`passing out in: ${timer[0]}${timer[1]}:${timer[2]}${timer[3]}`, 405, 25);
    }

    // // didn't work... fixed it by hardcoding and .toggling instead
    // drawGameOver() {
    //     let x = this.gameOverImg;
    //     x.src = "../images/character_gameover.png";

    //     x.onload = function(){
    //         this.ctx.drawImage(x, 200, 175, 192, 174);
    //     }
    // }

    foodCollision() {
        for (let i = 0; i < this.food.length; i++){
            if (this.player.checkCollision(this.food[i])) {
                this.food.splice(i, 1, 'none');
                this.score += 1
                this.sound.pause();
                this.sound.currentTime = 0;
                this.sound.volume='0.5';
                this.sound.play();
            }
        }
    }

    blockCollision() {
        for (let i = 0; i < this.blocks.length; i++) {
            if (this.player.checkCollision(this.blocks[i])) {
                if (this.player.direction === 'L'){
                    this.player.x += 10;
                } else if (this.player.direction === 'U'){
                    this.player.y += 10;
                } else if (this.player.direction === 'R'){
                    this.player.x -= 10;
                } else if (this.player.direction === 'D'){
                    this.player.y -= 10;
                }
            } 
        }
    }

    checkWin() {
        if (this.score === 5) {
            return true;
        }
    }

    checkLose() {
        if (this.time <= 0) {
            return true;
        }
    }

    fourDigitString(time) {
        switch(time.toString().length){
            case 4:
                return `${time}`;
                break;
            case 3:
                return `0${time}`;
                break;
            case 2:
                return `00${time}`;
                break;
            case 1:
                return `000${time}`;
        }
    }

    floatAnimation() {
        if(this.time <= 1000 && this.time >= 950){
            this.spriteFloat = 0;
        } else if(this.time < 950 && this.time >= 900){
            this.spriteFloat = 1;
        } else if(this.time < 900 && this.time >= 850){
            this.spriteFloat = 0;
        } else if(this.time < 850 && this.time >= 800){
            this.spriteFloat = 1;
        } else if(this.time < 800 && this.time >= 750){
            this.spriteFloat = 0;
        } else if(this.time < 750 && this.time >= 700){
            this.spriteFloat = 1;
        } else if(this.time < 700 && this.time >= 650){
            this.spriteFloat = 0;
        } else if(this.time < 650 && this.time >= 600){
            this.spriteFloat = 1;
        } else if(this.time < 600 && this.time >= 550){
            this.spriteFloat = 0;
        } else if(this.time < 550 && this.time >= 500){
            this.spriteFloat = 1;
        } else if(this.time < 500 && this.time >= 450){
            this.spriteFloat = 0;
        } else if(this.time < 450 && this.time >= 400){
            this.spriteFloat = 1;
        } else if(this.time < 400 && this.time >= 350){
            this.spriteFloat = 0;
        } else if(this.time < 350 && this.time >= 300){
            this.spriteFloat = 1;
        } else if(this.time < 300 && this.time >= 250){
            this.spriteFloat = 0;
        } else if(this.time < 250 && this.time >= 200){
            this.spriteFloat = 1;
        } else if(this.time < 200 && this.time >= 150){
            this.spriteFloat = 0;
        } else if(this.time < 150 && this.time >= 100){
            this.spriteFloat = 1;
        } else if(this.time < 100 && this.time >= 50){
            this.spriteFloat = 0;
        } else if(this.time < 50){
            this.spriteFloat = 1;
        } 
    }

    clear() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }

}