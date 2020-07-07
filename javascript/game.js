class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined; 
        this.player = new Player(this, 300, 300, 32, 32);
        this.blocks = [];
        this.food = [];
        this.backgroundImg = new Image();
        this.score = 0;
        this.x = undefined;
        this.y = undefined;
        this.width = 600;
        this.height = 600;
        this.sound = new Audio("../sounds/bite.mp3")
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
            if(this.checkWin()){
                this.winGame();
                cancelAnimationFrame(animation);
            }
        }
        window.requestAnimationFrame(loop);
    }

    winGame() {
        this.clear();
        this.ctx.font = "30px Helvetica";
        this.ctx.fillText('HURRAY, YOU LIVE!', 200, 200);
        document.getElementById("play-again").classList.toggle("toggle");
    }



    createBlocks() {
        for (let i = 0; i < 15; i++) {
            this.blocks.push(new Block(this));
        }
    }

    createFoods() {
        for (let i = 0; i < 5; i++) {
            this.food.push(new Food(this));
        }
    }

    drawBackground() {
        this.backgroundImg.src = "../images/background.jpg";
        this.ctx.drawImage(this.backgroundImg, 0, 0, 600, 600);
    }

    drawPlayer() {
        this.player.drawComponent("../images/character.png");
    }

    drawBlocks() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].drawBlock();
        }
    }

    drawFoods() {
        for (let i = 0; i < this.food.length; i++){
            // for(let j = 0; j < this.blocks.length; j++){
            //     if (this.food[i].checkCollision(this.blocks[j])){
            //         this.food.splice(this.food.indexOf(this.food[i]), 1);
            //         this.food.push(new Food());
            //     }
            // }
            this.food[i].drawComponent("../images/fruit.png");
        }
    }

    foodCollision() {
        for (let i = 0; i < this.food.length; i++){
            if (this.player.checkCollision(this.food[i])) {
                this.food.splice(i, 1);
                this.score += 1
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

    clear() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }

}