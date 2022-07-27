// VARIABLES
const gridboxes=document.querySelectorAll('.gr')
const newgame=document.querySelector('.game-start-container');
const gamemenu=document.querySelector('.new-game-container');
const multiplayer=document.querySelector('.game-start-vs-player-container')
const vsComputerbut=document.querySelector('new-game-vs-cpu-button')
const multiplayerbut=document.querySelector('new-game-vs-player-button')
let circleTurn;
const xImage="./assets/icon-x.svg"
const oImage="./assets/icon-o.svg"
let userStat=document.getElementById('user-stat-counter')
let cpuStat=document.getElementById('cpu-stat-counter')
let tiesStat=document.getElementById('ties-stat-counter');
const restartGame=document.querySelector('.game-start-reset-button');
let userWins=0;
let computerWins=0;
let ties=0;
const xhover="./assets/icon-x-outline.svg";
const ohover="./assets/icon-o-outline.svg";
let player1mark;




// FUNCTION FOR SELECTING MULTIPLAYER

    // gamemenu.style.display='none';
    // newgame.style.display='block';
    document.getElementById('user-stat-text').innerHTML='X(P2)'
    document.getElementById('cpu-stat-text').innerHTML='O(P1)'
    gridboxes.forEach(box=>{// adding event listener to all grid box containers
        box.addEventListener('click',handleClickVsPlayer)
        box.addEventListener('mouseover',hoverEffect)
    box.addEventListener('mouseout',offHoverEffect)
    })



   
// }
// HANDLING GRIDBOXES CLICK IN VS MULTIPLAYER
function handleClickVsPlayer(e){
    const box=e.target;
    let currentImage=circleTurn? oImage:xImage
    whooseTurn(currentImage);
    placeMark(box,currentImage);
    checkWin();
    swapTurns();
}



// HELPER FUNCTIONSSSSSSS


// funnction for placing mark vs player
function placeMark(box,currentImage){
    box.firstChild.setAttribute('src',currentImage);
    box.firstChild.style.display='block'
    box.style.pointerEvents='none'
}



// function that swaps if is O OR X'S TURN
function swapTurns(){
    circleTurn=!circleTurn;
}
// FUNCTION THAT TELLS WHOSE TURN IT IS
function whooseTurn(currentImage){
    if(currentImage==xImage){
        document.getElementById('turn').setAttribute('src',oImage)
    }else{
        document.getElementById('turn').setAttribute('src',xImage)
    }
}

// FUNCTION FOR HOVERING OVER A BOX
function hoverEffect(e){
    const box=e.target;
    let currentImage=circleTurn? oImage:xImage
    if(currentImage==oImage){
        box.style.backgroundImage="url('./assets/icon-o-outline.svg')";
        box.style.backgroundRepeat='no-repeat';
        box.style.backgroundPosition='center';
        
    }else{
        box.style.backgroundImage="url('./assets/icon-x-outline.svg')";
        box.style.backgroundRepeat='no-repeat';
        box.style.backgroundPosition='center';
    }
}

function offHoverEffect(e){
    const box=e.target;
    box.style.backgroundImage='none';
}


// CHECKING WIN


 
// ---------------------------------------------
function checkWin(){
   if(gridboxes[0].firstChild.getAttribute('src')==xImage && gridboxes[1].firstChild.getAttribute('src')==xImage && gridboxes[2].firstChild.getAttribute('src')==xImage){
    console.log('X Wins');
    userWins=userWins+1
    userStat.innerHTML=userWins
    localStorage.setItem('Ustat',userStat.innerHTML)
    document.querySelector('.message').classList.remove('hide')
    document.querySelector('.message p').innerHTML='PLAYER 2 WINS!';

    document.getElementById('won-img').src=xImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #31C3BD';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;

   }
   
 if(gridboxes[3].firstChild.getAttribute('src')==xImage && gridboxes[4].firstChild.getAttribute('src')==xImage && gridboxes[5].firstChild.getAttribute('src')==xImage){
    console.log('X Wins');
    userWins=userWins+1
    userStat.innerHTML=userWins
    localStorage.setItem('Ustat',userStat.innerHTML)
    document.querySelector('.message').classList.remove('hide')
    document.querySelector('.message p').innerHTML='PLAYER 2 WINS!';
    document.getElementById('won-img').src=xImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #31C3BD';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
}

 if(gridboxes[6].firstChild.getAttribute('src')==xImage && gridboxes[7].firstChild.getAttribute('src')==xImage && gridboxes[8].firstChild.getAttribute('src')==xImage){
    console.log('X Wins');
    userWins=userWins+1
    userStat.innerHTML=userWins
    localStorage.setItem('Ustat',userStat.innerHTML)
    document.querySelector('.message').classList.remove('hide')
    document.querySelector('.message p').innerHTML='PLAYER 2 WINS!';
    document.getElementById('won-img').src=xImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #31C3BD';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
}

 if(gridboxes[0].firstChild.getAttribute('src')==xImage && gridboxes[3].firstChild.getAttribute('src')==xImage && gridboxes[6].firstChild.getAttribute('src')==xImage){
    console.log('X Wins');
    userWins=userWins+1;
    userStat.innerHTML=userWins;
    localStorage.setItem('Ustat',userStat.innerHTML)
    document.querySelector('.message').classList.remove('hide');
    document.querySelector('.message p').innerHTML='PLAYER 2 WINS!';
    document.getElementById('won-img').src=xImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #31C3BD';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    // document.querySelector('#quit-btn').onclick=quitGame;
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    
 }
 if(gridboxes[1].firstChild.getAttribute('src')==xImage && gridboxes[4].firstChild.getAttribute('src')==xImage && gridboxes[7].firstChild.getAttribute('src')==xImage){
    console.log('X Wins');
    userWins=userWins+1;
    userStat.innerHTML=userWins;
    localStorage.setItem('Ustat',userStat.innerHTML)
    document.querySelector('.message').classList.remove('hide');
    document.querySelector('.message p').innerHTML='PLAYER 2 WINS!';
    document.getElementById('won-img').src=xImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #31C3BD';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    // document.querySelector('#quit-btn').onclick=quitGame;
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
}

 if(gridboxes[2].firstChild.getAttribute('src')==xImage && gridboxes[5].firstChild.getAttribute('src')==xImage && gridboxes[8].firstChild.getAttribute('src')==xImage){
    console.log('X Wins');
    userWins=userWins+1;
    userStat.innerHTML=userWins;
    localStorage.setItem('Ustat',userStat.innerHTML)
    document.querySelector('.message').classList.remove('hide');
    document.querySelector('.message p').innerHTML='PLAYER 2 WINS!';
    document.getElementById('won-img').src=xImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #31C3BD';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
}

 if(gridboxes[0].firstChild.getAttribute('src')==xImage && gridboxes[4].firstChild.getAttribute('src')==xImage && gridboxes[8].firstChild.getAttribute('src')==xImage){
    console.log('X Wins');
    userWins=userWins+1;
    userStat.innerHTML=userWins;
    localStorage.setItem('Ustat',userStat.innerHTML)
    document.querySelector('.message').classList.remove('hide')
    document.querySelector('.message p').innerHTML='PLAYER 2 WINS!';
    document.querySelector('.message h4').style.color=' #31C3BD';
    document.getElementById('won-img').src=xImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
}

 if(gridboxes[2].firstChild.getAttribute('src')==xImage && gridboxes[4].firstChild.getAttribute('src')==xImage && gridboxes[6].firstChild.getAttribute('src')==xImage){
    console.log('X Wins');
    userWins=userWins+1;
    userStat.innerHTML=userWins;
    localStorage.setItem('Ustat',userStat.innerHTML)
    document.querySelector('.message').classList.remove('hide');
    document.querySelector('.message p').innerHTML='PLAYER 2 WINS!';
    document.getElementById('won-img').src=xImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #31C3BD';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
}

 if(gridboxes[0].firstChild.getAttribute('src')==oImage && gridboxes[1].firstChild.getAttribute('src')==oImage && gridboxes[2].firstChild.getAttribute('src')==oImage){
    console.log('O Wins');
    computerWins=computerWins+1;
    cpuStat.innerHTML=computerWins;
    localStorage.setItem('Cstat',cpuStat.innerHTML);
    document.querySelector('.message').classList.remove('hide');
    document.querySelector('.message p').innerHTML='PLAYER 1 WINS!';
    document.getElementById('won-img').src=oImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #F2B137';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
   }
   
 if(gridboxes[3].firstChild.getAttribute('src')==oImage && gridboxes[4].firstChild.getAttribute('src')==oImage && gridboxes[5].firstChild.getAttribute('src')==oImage){
    console.log('O Wins');
    computerWins=computerWins+1
    cpuStat.innerHTML=computerWins
    localStorage.setItem('Cstat',cpuStat.innerHTML);
    document.querySelector('.message').classList.remove('hide')
    document.querySelector('.message p').innerHTML='PLAYER 1 WINS!';
    document.getElementById('won-img').src=oImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #F2B137';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
}

 if(gridboxes[6].firstChild.getAttribute('src')==oImage && gridboxes[7].firstChild.getAttribute('src')==oImage && gridboxes[8].firstChild.getAttribute('src')==oImage){
    console.log('O Wins');
    computerWins=computerWins+1
    cpuStat.innerHTML=computerWins
    localStorage.setItem('Cstat',cpuStat.innerHTML);
    document.querySelector('.message').classList.remove('hide')
    document.querySelector('.message p').innerHTML='PLAYER 1 WINS!';
    document.getElementById('won-img').src=oImage
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND'
    document.querySelector('.message h4').style.color=' #F2B137';;
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
}

 if(gridboxes[0].firstChild.getAttribute('src')==oImage && gridboxes[3].firstChild.getAttribute('src')==oImage && gridboxes[6].firstChild.getAttribute('src')==oImage){
    console.log('o Wins');
    computerWins=computerWins+1
    cpuStat.innerHTML=computerWins
    localStorage.setItem('Cstat',cpuStat.innerHTML);
    document.querySelector('.message').classList.remove('hide')
    document.querySelector('.message p').innerHTML='PLAYER 1 WINS!';
    document.getElementById('won-img').src=oImage
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #F2B137';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
}

 if(gridboxes[1].firstChild.getAttribute('src')==oImage && gridboxes[4].firstChild.getAttribute('src')==oImage && gridboxes[7].firstChild.getAttribute('src')==oImage){
    console.log('O Wins');
    computerWins=computerWins+1;
    cpuStat.innerHTML=computerWins;
    localStorage.setItem('Cstat',cpuStat.innerHTML);
    document.querySelector('.message').classList.remove('hide');
    document.querySelector('.message p').innerHTML='PLAYER 1 WINS!';
    document.getElementById('won-img').src=oImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #F2B137';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
}

 if(gridboxes[2].firstChild.getAttribute('src')==oImage && gridboxes[5].firstChild.getAttribute('src')==oImage && gridboxes[8].firstChild.getAttribute('src')==oImage){
    console.log('O Wins');
    computerWins=computerWins+1;
    cpuStat.innerHTML=computerWins;
    localStorage.setItem('Cstat',cpuStat.innerHTML);
    document.querySelector('.message').classList.remove('hide');
    document.querySelector('.message p').innerHTML='PLAYER 1 WINS!';
    document.getElementById('won-img').src=oImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #F2B137';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
}

 if(gridboxes[0].firstChild.getAttribute('src')==oImage && gridboxes[4].firstChild.getAttribute('src')==oImage && gridboxes[8].firstChild.getAttribute('src')==oImage){
    console.log('O Wins');
    computerWins=computerWins+1;
   cpuStat.innerHTML=computerWins;
   localStorage.setItem('Cstat',cpuStat.innerHTML);
    document.querySelector('.message').classList.remove('hide');
    document.querySelector('.message p').innerHTML='PLAYER 1 WINS!';
    document.getElementById('won-img').src=oImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #F2B137';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
}

 if(gridboxes[2].firstChild.getAttribute('src')==oImage && gridboxes[4].firstChild.getAttribute('src')==oImage && gridboxes[6].firstChild.getAttribute('src')==oImage){
    console.log('O Wins');
    computerWins=computerWins+1;
    cpuStat.innerHTML=computerWins;
    localStorage.setItem('Cstat',cpuStat.innerHTML);
    document.querySelector('.message').classList.remove('hide');
    document.querySelector('.message p').innerHTML='PLAYER 1 WINS!';
    document.getElementById('won-img').src=oImage;
    document.getElementById('won-img').classList.remove('hide');
    document.querySelector('.message h4').innerHTML='TAKES THE ROUND';
    document.querySelector('.message h4').style.color=' #F2B137';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND'
    // document.querySelector('#quit-btn').onclick=quitGame;
} 
if(gridboxes[0].firstChild.getAttribute('src')!='' && gridboxes[1].firstChild.getAttribute('src')!=''&& gridboxes[2].firstChild.getAttribute('src')!='' &&
gridboxes[3].firstChild.getAttribute('src')!='' && gridboxes[4].firstChild.getAttribute('src')!='' && gridboxes[5].firstChild.getAttribute('src')!='' && gridboxes[6].firstChild.getAttribute('src')!='' &&
gridboxes[7].firstChild.getAttribute('src')!=''&& gridboxes[8].firstChild.getAttribute('src')!=''){
    console.log('TIED');
    ties=ties+1;
    tiesStat.innerHTML=ties;
    // localStorage.setItem('Tstat',tiesStat.innerHTML);
    document.querySelector('.message').classList.remove('hide');
    // document.querySelector('.message p').innerHTML='PLAYER 1 WINS!';
    document.getElementById('won-img').classList.add('hide');
    document.querySelector('.message P').innerHTML='';
    document.querySelector('.message h4').innerHTML='ROUND TIED';
    document.querySelector('.message h4').style.color=' #A8BFC9';
    document.querySelector('#quit-btn').innerHTML='QUIT'
    document.querySelector('#next-round-btn').innerHTML='NEXT ROUND';
    // document.querySelector('#quit-btn').onclick=quitGame;
}

}


// function for quiting game
function quitGame(){
    window.open('tictactoe.html','_self');
}
// NEXT ROUND FUNCTION
function nextRound(){
    playAgain()
    document.querySelector('.message').classList.add('hide')
    // handleClick()
}
    // function for reseting all the  grid boxes to empty
function playAgain(currentImage){
    swapTurns()
    whooseTurn(currentImage)
    gridboxes[0].firstChild.setAttribute('src','')
    gridboxes[0].firstChild.style.display='none';
    gridboxes[0].style.pointerEvents=''

    gridboxes[1].firstChild.setAttribute('src','')
    gridboxes[1].firstChild.style.display='none';
    gridboxes[1].style.pointerEvents=''

    gridboxes[2].firstChild.setAttribute('src','')
    gridboxes[2].firstChild.style.display='none';
    gridboxes[2].style.pointerEvents=''

    gridboxes[3].firstChild.setAttribute('src','')
    gridboxes[3].firstChild.style.display='none';
    gridboxes[3].style.pointerEvents=''

    gridboxes[4].firstChild.setAttribute('src','')
    gridboxes[4].firstChild.style.display='none';
    gridboxes[4].style.pointerEvents=''

    gridboxes[5].firstChild.setAttribute('src','')
    gridboxes[5].firstChild.style.display='none';
    gridboxes[5].style.pointerEvents=''

    gridboxes[6].firstChild.setAttribute('src','')
    gridboxes[6].firstChild.style.display='none';
    gridboxes[6].style.pointerEvents=''

    gridboxes[7].firstChild.setAttribute('src','')
    gridboxes[7].firstChild.style.display='none';
    gridboxes[7].style.pointerEvents=''

    gridboxes[8].firstChild.setAttribute('src','')
    gridboxes[8].firstChild.style.display='none';
    gridboxes[8].style.pointerEvents=''


}

function restartFucn(){
    document.querySelector('.message').classList.remove('hide');
    document.getElementById('won-img').classList.add('hide');
    document.querySelector('.message P').classList.add('hide');
    document.querySelector('.message h4').innerHTML='RESTART GAME?';
    document.querySelector('.message h4').style.color='#A8BFC9';
    document.querySelector('#quit-btn').innerHTML='NO, CANCEL'
    document.querySelector('#next-round-btn').innerHTML='YES, RESTART'
    document.querySelector('#quit-btn').onclick=hide;
   
}

// Addin event listener to restart gme icon
restartGame.addEventListener('click',restartFucn)
function hide(){
    document.querySelector('.message').classList.add('hide');
}
