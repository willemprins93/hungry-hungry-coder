class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined; 
        this.player = new Player(this, 300, 300, 32, 32);
        this.blocks = [];
        this.food = [];
        this.background = undefined;
        this.backgroundImg = new Image();
        this.score = 0;
        this.x = undefined;
        this.y = undefined;
        this.width = 600;
        this.height = 600;
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
            animation = requestAnimationFrame(loop);
            this.clear()
            this.drawBackground();
            this.drawBlocks();
            this.drawFoods();
            this.drawPlayer();
            this.player.move();
            this.foodCollision();
            // this.blockCollision();
            this.checkWin();
        }
        requestAnimationFrame(loop);
    }

    createBlocks() {
        for (let i = 0; i < 10; i++) {
            this.blocks.push(new Block(this));
        }
    }

    createFoods() {
        for (let i = 0; i < 5; i++) {
            this.food.push(new Food(this));
        }
    }

    drawBackground() {
        this.backgroundImg.src = "../images/fruit.png"
    }

    drawPlayer() {
        this.player.drawComponent("../images/character.png")
    }

    drawBlocks() {
        for (let i = 0; i < this.blocks.length; i++) {
            this.blocks[i].drawBlock();
        }
    }

    drawFoods() {
        for (let i = 0; i < this.food.length; i++){
            this.food[i].drawComponent("../images/fruit.png")
        }
    }

    foodCollision() {
        for (let i = 0; i < this.food.length; i++){
            if (this.player.checkCollision(this.food[i])) {
                this.food.splice(i, 1);
                this.score += 1
            }
        }
    }

    // blockCollision() {
    //     for (let i = 0; i < this.blocks.length; i++) {
    //         if (this.player.checkCollision(this.blocks[i])) {
    //             this.player.speed = 0;
    //         } 
    //     }
    // }

    checkWin() {
        if (this.food.length === 0) {
            return true;
        }
    }
    

    clear() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }

}