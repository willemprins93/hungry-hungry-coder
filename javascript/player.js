class Player extends Component {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
        this.direction = undefined;
        // possibleDirections = ['L', 'U', 'R', 'D'];
        this.possibleKeyStrokes = [37, 38, 39, 40];
    }

    move() {
        document.onkeydown = event => {
            const key = event.keyCode;
            if (this.possibleKeyStrokes.includes(key)) {
                switch (key) {
                    case 37:
                        this.direction = 'L';
                        if (this.x >= 10) this.x -= 10;
                        break;
                    case 38:
                        this.direction = 'U';
                        if (this.y >= 10) this.y -= 10;
                        break;
                    case 39: 
                        this.direction = 'R';
                        if (this.x <= 590 - this.width) this.x += 10;
                        break;
                    case 40: 
                        this.direction = 'D';
                        if (this.y <= 590 - this.height) this.y += 10;
                        break;
                }
                }
            }
                
            
        
    }

    checkCollision(element) {
        if(this.y + this.height >= element.y && this.y <= element.y + element.height) {
            if(this.x + this.width >= element.x && this.x <= element.x + element.width) {
                return true;
            }
        } else {
            return false;
        }
    }

}