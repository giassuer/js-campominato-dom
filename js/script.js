// L'utente indica un livello di difficoltà in base al quale viene generata
//  una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.


const playButton = document.getElementById('play-button');
playButton.addEventListener('click', startGame);

function startGame() {
    const title = document.getElementById('title');
    title.classList.add('hidden')

    const gridGame = document.getElementById('grid-game');
    gridGame.classList.remove('hidden')
    gridGame.innerHTML = '';

    const levelDifficulty = parseInt(document.getElementById('select-level').value);

    let gridMaxNumber;

    let gridMaxLength;

    let bombArray = [];
    console.log(bombArray);

    let attempts = 0;

    if (levelDifficulty === 1) {
        gridMaxNumber = 100;
        gridMaxLength = 10; 

    }else if (levelDifficulty === 2) {
        gridMaxNumber = 81;
        gridMaxLength = 9; 
        
    }else if (levelDifficulty === 3) {
        gridMaxNumber = 49;
        gridMaxLength = 7; 
        
    }

    while (bombArray.length <= 16) {

       if (!bombArray.includes(bombArray)) {
    }     bombArray.push(getRndInteger(1, gridMaxNumber))
           
        
    }

    for (let i = 1; i <= gridMaxNumber; i++) {
        
        const newSquare = generateSquare(i, gridMaxLength);


        if (bombArray.includes(i)) {

            newSquare.addEventListener('click',bomb )
            newSquare.addEventListener('click',EndGame )
            
            
        }else if(!bombArray.includes(i)){
            newSquare.addEventListener('click',clicked )
            newSquare.addEventListener('click',clickNon)

        }else if (tent.length = tent. length - bombArray.length) {
            alert('HAI VINTO')
        }
  
        gridGame.appendChild(newSquare)
    }
}

function clicked() {
    this.classList.add('active');
}

function bomb() {
    this.classList.add('bomba');
}


function EndGame(params) {
    let tent = document.getElementsByClassName('active').length
    this.style.pointerEvents = 'none';
    alert('HAI PERSO' + ' ' + 'tentativi' + ' ' + tent);

    return tent;
}

function clickNon(params) {
    this.style.pointerEvents = 'none';
}

function generateSquare(generateNumber, gridSize) {
    
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerHTML = `<span>${generateNumber}</span>`;
    square.style.width = `calc(100% / ${gridSize})`;
    square.style.height = `calc(100% / ${gridSize})`;

    return square;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




