class Block extends Component {
    constructor(game) {
        super(game);
        this.x = Math.floor(Math.random() * 550);
        this.y = Math.floor(Math.random() * 550) + 30;
        this.width = (Math.floor(Math.random() * 60)) + 10 ;
        this.height = (Math.floor(Math.random() * 60)) + 10;
    }

    // discoColour(){
    //     let number = Math.floor(Math.random() * 3);
    //     if(number === 0){
    //         return '#1d6b3b';
    //     } else if(number === 1){
    //         return '#f39f1b';
    //     } else if(number === 2){
    //         return '#BC4B51';
    //     }
    // }

    drawBlock() {
        const gameCtx = this.game.ctx;
        // const colour = this.discoColour();
        if(this.width % 2 === 0){
            gameCtx.fillStyle = '#1d6b3b';
        } else if(this.width % 3 === 0){
            gameCtx.fillStyle = '#BC4B51';
        } else {
            gameCtx.fillStyle = '#f39f1b';
        }
        // gameCtx.fillStyle = colour;
        gameCtx.fillRect(this.x, this.y, this.width, this.height);
    }

}