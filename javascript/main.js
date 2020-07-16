window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const startButton = document.getElementById("start-button");
    const playAgain = document.getElementById("play-again");
    const tryAgain = document.getElementById("try-again");
    const mainMenu = document.getElementById('main-menu');
    const music = document.getElementById('music');
    const victory = document.getElementById('win-music');
    const gameover = document.getElementById('gameover-music');

    let titleOne = null;
    let titleTwo = null;

    splashScreen();

    startButton.onclick = function() {
        createGame();
        startButton.classList.toggle('toggle');
        clearInterval(titleOne);
        clearInterval(titleTwo);
    };

    function createGame() {
        const myGame = new Game();
        myGame.init();
    };

    function splashScreen() {
        ctx.font = 'bold italic 42px Helvetica';
        ctx.fillStyle = '#1d6b3b';
        ctx.fillText("HUNGRY HUNGRY CODER", 32, 69);

        titleOne = setInterval(() => {
            ctx.font = 'bold italic 42px Helvetica';
            ctx.fillStyle = '#BC4B51';
            ctx.fillText("HUNGRY HUNGRY CODER", 32, 69);

            ctx.font = 'bold italic 42px Helvetica';
            ctx.fillStyle = 'white';
            ctx.fillText("HUNGRY HUNGRY CODER", 28, 65);
        }, 500)

        titleTwo = setInterval(() => {
            ctx.clearRect(0, 0, 600, 70)

            ctx.font = 'bold italic 42px Helvetica';
            ctx.fillStyle = '#1d6b3b';
            ctx.fillText("HUNGRY HUNGRY CODER", 32, 69);
        }, 1000)


        ctx.fillStyle = '#BC4B51';
        ctx.font = 'italic bold 28px Helvetica';
        ctx.fillText('Oh no!', 250, 180);

        ctx.font = '18px Helvetica';
        ctx.fillText('You have been coding for too long', 160, 230);
        ctx.fillText(`and now you're weak and malnourished!`, 140, 255);

        ctx.fillText('Go find some food quickly before', 160, 300);
        ctx.fillText(`you pass out!`, 250, 325);

        ctx.fillStyle = '#1d6b3b';
        ctx.font = '22px Helvetica';
        ctx.fillText(`Use the ← ↑ ↓ → keys or W A S D`, 135, 410)
        ctx.fillText(`to move around and pick up some snacks.`, 105, 435)
    }

    playAgain.onclick = function() {
        createGame();
        playAgain.classList.toggle('toggle');
        document.getElementById("win").classList.toggle("toggle");
        mainMenu.classList.toggle('toggle');
        victory.pause();
        victory.currentTime = 0;
    }

    tryAgain.onclick = function() {
        createGame();
        tryAgain.classList.toggle('toggle');
        document.getElementById("gameover").classList.toggle("toggle");
        mainMenu.classList.toggle('toggle');
        gameover.pause();
        gameover.currentTime = 0;

    }

    mainMenu.onclick = function() {
        location.reload();
    }

};