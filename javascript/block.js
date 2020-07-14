class Block extends Component {
    constructor(game) {
        super(game);
        this.x = Math.floor(Math.random() * 550);
        this.y = Math.floor(Math.random() * 550);
        this.width = (Math.floor(Math.random() * 60)) + 10 ;
        this.height = (Math.floor(Math.random() * 60)) + 10;
    }

    randomColour(){
        let number = Math.floor(Math.random() * 3);
        if(number === 0){
            return '#1d6b3b';
        } else if(number === 1){
            return '#3f2c70';
        } else if(number === 2){
            return '#781439';
        }
    }

    drawBlock() {
        const gameCtx = this.game.ctx;
        const colour = this.randomColour();
        gameCtx.fillStyle = colour;
        gameCtx.fillRect(this.x, this.y, this.width, this.height);
    }

}