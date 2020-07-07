window.onload = function() {

    document.getElementById("start-button").onclick = function() {
        createGame();
    };

    function createGame() {
        const myGame = new Game();
        myGame.init();
    };

};