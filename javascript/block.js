class Block extends Component {
    constructor(game) {
        super(game);
        this.x = Math.floor(Math.random() * 550);
        this.y = Math.floor(Math.random() * 550);
        this.width = (Math.floor(Math.random() * 60)) + 10 ;
        this.height = (Math.floor(Math.random() * 60)) + 10;
    }

    drawBlock() {
        const gameCtx = this.game.ctx;
        gameCtx.fillStyle = "#1d6b3b";
        gameCtx.fillRect(this.x, this.y, this.width, this.height);
    }

}