window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const startButton = document.getElementById("start-button");
    const playAgain = document.getElementById("play-again");

    splashScreen();

    startButton.onclick = function() {
        createGame();
        startButton.classList.toggle('toggle');
    };

    function createGame() {
        const myGame = new Game();
        myGame.init();
    };

    function splashScreen() {
        ctx.font = '42px Helvetica';
        ctx.fillStyle = 'white';
        ctx.fillText("HUNGRY HUNGRY CODER", 28, 65);

        ctx.font = '24px Helvetica';
        ctx.fillText('Oh no!', 265, 190);

        ctx.font = '18px Helvetica';
        ctx.fillText('You have been coding for too long', 160, 230);
        ctx.fillText(`and now you're weak and malnourished!`, 140, 255);

        ctx.fillText('Go find some food quickly before', 160, 300);
        ctx.fillText(`you pass out!`, 250, 325);

        ctx.font = '20px Helvetica';
        ctx.fillText(`Use the arrow keys to move around`, 150, 410)
        ctx.fillText(`and pick up some snacks.`, 185, 435)
    }

    playAgain.onclick = function() {
        createGame();
        playAgain.classList.toggle('toggle');
    }
};