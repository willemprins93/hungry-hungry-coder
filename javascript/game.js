class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined; 
        this.player = new Player(this, 300, 300, 25, 32);
        this.blocks = [];
        this.food = [];
        this.backgroundImg = new Image();
        this.gameOverImg = new Image();
        this.score = 0;
        this.x = undefined;
        this.y = undefined;
        this.width = 600;
        this.height = 600;
        this.sound = new Audio("../sounds/bite.mp3")
        this.music = document.getElementById('music');
        this.victory = document.getElementById('win-music');
        this.gameover = document.getElementById('gameover-music');
        this.time = 1000;
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
        this.music.play()
        const loop = () => {
            animation = window.requestAnimationFrame(loop);
            this.clear()
            this.drawBackground();
            // this.drawGameOver();
            this.drawBlocks();
            this.drawFoods();
            this.drawPlayer();
            this.player.move();
            this.foodCollision();
            this.blockCollision();
            this.drawScore();
            this.drawTime();
            this.time -= 1.66; 
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
        this.ctx.fillText('HURRAY, YOU LIVE!', 53, 105);

        this.ctx.fillStyle = "#BC4B51";
        this.ctx.font = "20px Helvetica";
        this.ctx.fillText(`Don't forget to `, 235, 415);

        this.ctx.fillText('take a break next time!', 195, 440);

        document.getElementById("play-again").classList.toggle("toggle");
    }

    loseGame() {
        this.clear();

        // this.drawGameOver();
        document.getElementById("gameover").classList.toggle("toggle");

        this.ctx.font = "bold italic 60px Helvetica";
        this.ctx.fillStyle = "#1d6b3b";
        this.ctx.fillText('GAME OVER', 115, 130);

        this.ctx.font = "18px Helvetica";
        this.ctx.fillStyle = "#BC4B51";
        this.ctx.fillText(`You only managed to eat ${this.score} snacks`, 155, 420);
        this.ctx.fillText(`before passing out...`, 220, 440);

        document.getElementById("try-again").classList.toggle("toggle");
    }

    createBlocks() {
        for (let i = 0; i < 15; i++) {
            this.blocks.push(new Block(this));
        }
    }

    createFoods() { // not working yet
        let newFood;
        while(this.food.length < 5) {
            newFood = new Food(this);
            for (let i = 0; i < this.blocks.length; i++) {
                if (newFood.checkOverlap(this.blocks[i]) === true) {
                    newFood = new Food(this);
                    break;
                }    
            }
            this.food.push(newFood);
        }
    }
    

    drawBackground() {
        this.backgroundImg.src = "../images/background.png";
        this.ctx.drawImage(this.backgroundImg, 0, 0, 600, 600);
    }

    drawPlayer() {
        if(this.player.direction === 'R'){
            this.player.drawComponent('../images/character_sideright.png');
        } else if (this.player.direction === 'L'){
            this.player.drawComponent('../images/character_sideleft.png');
        } else if (this.player.direction === 'U'){
            this.player.drawComponent('../images/character_back.png');
        } else if (this.player.direction === 'D'){
            this.player.drawComponent('../images/character_front.png');
        }
    }

    drawBlocks() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].drawBlock();
        }
    }

    drawFoods() {
        for (let i = 0; i < this.food.length; i++){
            this.food[i].drawComponent("../images/fruit1.png");
        }
    }

    drawScore() {
        this.ctx.font = "20px Helvetica";
        this.ctx.fillStyle = "#BC4B51";
        this.ctx.fillText(`snacks found: ${this.score}`, 10, 25)
    }

    drawTime() {
        this.ctx.font = "20px Helvetica";
        this.ctx.fillStyle = "#BC4B51";
        this.ctx.fillText(`passing out in: ${this.time.toFixed(0)}`, 425, 25);
    }

    // didn't work... fixed it using DOM-manipulation instead
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
                this.food.splice(i, 1);
                this.score += 1
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
        if (this.food.length === 0) {
            return true;
        }
    }

    checkLose() {
        if (this.time <= 0) {
            return true;
        }
    }

    clear() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }

}