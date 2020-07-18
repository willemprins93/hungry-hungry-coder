class Food extends Component {
    constructor(game) {
        super(game);
        this.x = Math.floor(Math.random() * 550);
        this.y = Math.floor(Math.random() * 540) + 30;
        this.width = 29;
        this.height = 32;
    }

    checkOverlap(element) {
        if(this.y + this.height >= element.y && this.y <= element.y + element.height) {
            if(this.x + this.width >= element.x && this.x <= element.x + element.width) {
                return true;
            }
        } else {
            return false;
        }
    }
} 