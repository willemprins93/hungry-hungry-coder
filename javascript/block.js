class Block extends Component {
    constructor(game) {
        super(game);
        this.x = Math.floor(Math.random() * 550);
        this.y = Math.floor(Math.random() * 550);
        this.width = Math.floor(Math.random() * 100);
        this.height = Math.floor(Math.random() * 100);
    }

    drawBlock() {
        const gameCtx = this.game.ctx;
        gameCtx.fillRect(this.x, this.y, this.width, this.height);
    }

}