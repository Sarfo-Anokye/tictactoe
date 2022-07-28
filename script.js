let origBoard;
const huPlayer ='./assets/icon-x.svg';
const aiPlayer ='./assets/icon-o.svg';
const restartGame=document.querySelector('.game-start-reset-button');
let userStat=document.getElementById('user-stat-counter')
let cpuStat=document.getElementById('cpu-stat-counter')
let tiesStat=document.getElementById('ties-stat-counter');
let userWins=0;
let computerWins=0;
let ties=0;
let circleTurn;
const xhover="./assets/icon-x-outline.svg";
const ohover="./assets/icon-o-outline.svg";
const xImage="./assets/icon-x.svg"
const oImage="./assets/icon-o.svg"
const gridboxes=document.querySelectorAll('.gr')
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

const cells = document.querySelectorAll('.cell'); //selectin add cells with class 'cell'


startGame();  // Calling start game function



// document.querySelector('.choose-mark-x-button').addEventListener('click',()=>{   
//     document.querySelector('.choose-mark-x-button').classList.add('active');
//     player1mark=xImage;
//     document.querySelector('.choose-mark-o-button').classList.remove('active');
// });

// document.querySelector('.choose-mark-o-button').addEventListener('click',()=>{  // Adding click event to selectin mark x
//     document.querySelector('.choose-mark-o-button').classList.add('active');
//     player1mark=oImage;
//     document.querySelector('.choose-mark-x-button').classList.remove('active');

// });

function hoverEffectVsComputer(e){  // function for hovering over grid boxes
    const box=e.target;
    box.style.backgroundImage="url('./assets/icon-x-outline.svg')";
    box.style.backgroundRepeat='no-repeat';
    box.style.backgroundPosition='center';

}

function offHoverEffect(e){ 
    const box=e.target;
    box.style.backgroundImage='none';
}

function openVsComputer(){ // function for selecting vs computer
    document.querySelector('.new-game-container').classList.add('hide');
    document.querySelector('.game-start-container').classList.remove('hide');

}
function quitGame(){ // for quiting the game
    location.reload()
}

function startGame() { // start game function
    document.querySelector(".message").classList.add('hide') //hiding the winning message box
    origBoard = Array.from(Array(9).keys()); 
    for (var i = 0; i < cells.length; i++) {  // lopping through the gridboxes and adding event listeners
        cells[i].firstChild.setAttribute('src'," ");
        cells[i].firstChild.classList.add('hide');
        cells[i].style.pointerEvents='';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick);
        cells[i].addEventListener('mouseover', hoverEffectVsComputer)
        cells[i].addEventListener('mouseout', offHoverEffect)
    }
}

function turnClick(square) {  //
    if (typeof origBoard[square.target.id] == 'number') {
        turn(square.target.id, huPlayer)
        if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer);
        
    }
    if(checkWin(origBoard,huPlayer)){  
        userWins=userWins+1;
     userStat.innerHTML=userWins;
     document.querySelector('.message').classList.remove('hide');
     document.querySelector('.message p').innerHTML='YOU WON!';
     document.querySelector('.message P').classList.remove('hide');
     document.getElementById('won-img').src=xImage;
     document.getElementById('won-img').classList.remove('hide');
     document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
     document.querySelector('.message h4').style.color=' #31C3BD';
     document.querySelector('#quit-btn').innerHTML='QUIT'
     document.querySelector('#quit-btn').onclick=quitGame;
     document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    }
    else if(checkWin(origBoard,aiPlayer)){
        computerWins=computerWins+1
        cpuStat.innerHTML=computerWins
        document.querySelector('.message').classList.remove('hide');
        document.querySelector('.message P').classList.remove('hide');
     document.querySelector('.message p').innerHTML='OH NO, YOU LOST...';
     document.getElementById('won-img').src=oImage;
     document.getElementById('won-img').classList.remove('hide');
     document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
     document.querySelector('.message h4').style.color=' #F2B137';
     document.querySelector('#quit-btn').innerHTML='QUIT'
     document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
     document.querySelector('#quit-btn').onclick=quitGame;
    }
    else if(checkTie()==true){
        ties=ties+1;
    tiesStat.innerHTML=ties;
     document.querySelector('.message').classList.remove('hide');
    // document.querySelector('.message p').innerHTML='PLAYER 1 WINS!';
    document.getElementById('won-img').classList.add('hide');
    document.querySelector('.message P').classList.add('hide');
    document.querySelector('.message h4').innerHTML='ROUND TIED';
    document.querySelector('.message h4').style.color=' #A8BFC9';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND';
    document.querySelector('#quit-btn').onclick=quitGame;
    } 
    square.target.style.pointerEvents='none'; // setting pointer events to none
   
}

function turn(squareId, player) { // function for chosing whether ai turn or human turn
    origBoard[squareId] = player;
    document.getElementById(squareId).firstChild.setAttribute('src',player)
    document.getElementById(squareId).firstChild.classList.remove('hide')
    let gameWon = checkWin(origBoard, player)
    if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) { // function for checking Win
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = { index: index, player: player };
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            gameWon.player == huPlayer ? "blue" : "yellow";
    }
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
    // declareWinner(gameWon.player == huPlayer ? "You win!" : "You lose.");
}

// function declareWinner(who) {
//     document.querySelector(".endgame").style.display = "block";
//     document.querySelector(".endgame .text").innerText = who;
// }

function emptySquares() {
    return origBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
    return minimax(origBoard, aiPlayer).index;
}

function checkTie() {
    if (emptySquares().length == 0) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "";
            cells[i].removeEventListener('click', turnClick, false);
        }
        // declareWinner("Tie Game!")
        return true;
    }
    return false;
}

function minimax(newBoard, player) {
    let availSpots = emptySquares();

    if (checkWin(newBoard, huPlayer)) {
        return { score: -10 };
    } else if (checkWin(newBoard, aiPlayer)) {
        return { score: 10 };
    } else if (availSpots.length === 0) {
        return { score: 0 };
    }
    var moves = [];
    for (let i = 0; i < availSpots.length; i++) {
        let move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;

        if (player == aiPlayer) {
            let result = minimax(newBoard, huPlayer);
            move.score = result.score;
        } else {
            let result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = move.index;

        moves.push(move);
    }

    let bestMove;
    if (player === aiPlayer) {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}


function restartFucn(){
    document.querySelector('.message').classList.remove('hide');
    document.getElementById('won-img').classList.add('hide');
    document.querySelector('.message P').classList.add('hide');
    document.querySelector('.message h4').innerHTML='RESTART GAME?';
    document.querySelector('.message h4').style.color='#A8BFC9'
    document.querySelector('#quit-btn').innerHTML='NO, CANCEL'
    document.querySelector('#next-round-btn').innerHTML='YES, RESTART'
    document.querySelector('#quit-btn').onclick=hide;
//     font-family: 'Outfit';
// font-style: normal;
// font-weight: 700;
// font-size: 40px;
// line-height: 50px;
// text-align: center;
// letter-spacing: 2.5px;
// text-transform: uppercase;

// /* Silver */

// color: #A8BFC9;

   
}

// Addin event listener to restart gme icon
restartGame.addEventListener('click',restartFucn)
function hide(){
    document.querySelector('.message').classList.add('hide');
}