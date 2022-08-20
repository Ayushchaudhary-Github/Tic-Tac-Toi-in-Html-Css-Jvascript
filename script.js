console.log("Welcome to the game");
let music = new Audio("game.mp3")
let audioturn = new Audio("click.wav")
let gameover = new Audio("gameover.wav")
let turn = "X"

const changeTurn = () => {
    return turn === "x" ? "O" : "X" 
};
const checkWinner = () => {

};

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn=changeTurn();
            audioturn.play();
            checkWinner();
            document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
        }
    })
    
})