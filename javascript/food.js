class Food extends Component {
    constructor(game) {
        super(game);
        this.x = Math.floor(Math.random() * 550);
        this.y = Math.floor(Math.random() * 550);
        this.width = 24;
        this.height = 24;
    }
}