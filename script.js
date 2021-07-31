const gameBoard = (() => {
    let board = ["","","","","","","","",""];
    let sign = "X"
    const divGameBoard = document.querySelector("#div-game-board");
    const xSign = document.querySelector("#X");
    const oSign = document.querySelector("#O");
    const restartButton = document.querySelector("#restart");
    const message = document.querySelector("#message")

    oSign.addEventListener("click", function() {
        gameControls.setChosenPlayer("O")  
        gameControls.setGameStatus(true)
        changeMessage()
    })

   

    xSign.addEventListener("click", function() {
        gameControls.setChosenPlayer("X")
        gameControls.setGameStatus(true)
        changeMessage()
    })

    restartButton.addEventListener("click", function() {
        gameControls.setGameStatus(false)
        resetGame();
        populateBoard();
    })

    const getBoard = () => {
        return board
    
    }

    const populateBoard = () => {
    let index = 0;
   
    for (let square of board) {
        let newSquare = document.createElement("div")
        let newSign = document.createElement("p");

        // newSquare.style.border = "2% solid black";
        newSquare.style.width = "32%";
        newSquare.style.height = "32%";
        newSquare.id = index;
        newSquare.className = "square";

        newSign.innerHTML = square;

        newSquare.addEventListener("click", function() {
            let divIndex = newSquare.id;
            if (gameControls.getGameStatus() == false) {
                return
            }
            else if (board[divIndex] !== ""){
                return;
            }
            else {
            
            gameBoard.getBoard()[divIndex] = gameControls.getChosenPlayer().sign;
           
            clearBoard()
            populateBoard()
            gameControls.changePlayer()
            gameBoard.changeMessage()
            gameControls.checkTie()
            gameControls.checkWinner()
           
            // gameControls.changePlayer()
            }
        })

        newSquare.appendChild(newSign);
        divGameBoard.appendChild(newSquare)
        index += 1}
       
    }
    function clearBoard() {
                while (divGameBoard.hasChildNodes()) {
                    divGameBoard.removeChild(divGameBoard.firstChild);
                }}

    const clearBoardArray = () => {
        gameBoard.getBoard() 
        board =  ["","","","","","","","",""];
        return board
    } 

    function resetGame() {
        clearBoard();
        message.innerHTML = "Choose your Player"
        gameControls.setChosenPlayer("X");
        gameBoard.clearBoardArray()
        gameControls.setGameStatus(false)
    }
    function changeMessage() {
        if (gameControls.getGameStatus() == true) {
            
            message.innerHTML = "Player " + gameControls.getChosenPlayer().sign + "'s turn"
        }}
    populateBoard();
                
    
    
    
    
   return {
       board, populateBoard, sign, message, resetGame, getBoard, clearBoardArray, changeMessage
   }
   
  
})();



const playerFactory = (name, sign) => {
    
    return {name, sign}

}

const gameControls = (() => {

const playerX = playerFactory("Player X", "X");
const playerO = playerFactory("Player O", "O");

let chosenPlayer = playerX
let otherPlayer = playerO

let gameStatus = false;

const getGameStatus = () => {
    return gameStatus
}

const setGameStatus = (status) => {
    getGameStatus()
    return gameStatus = status
}

function setPlayer(sign) {
    if (sign == "X") {
        chosenPlayer = playerX;
        otherPlayer = playerO;
        
    }
    else if (sign == "O") {
        chosenPlayer = playerO;
        otherPlayer = playerX;
        
    }
    return {chosenPlayer, otherPlayer}
}


function changePlayer() {
    gameControls.getChosenPlayer()
    if (chosenPlayer == playerX) {
        chosenPlayer = playerO;
        otherPlayer = playerX;
        
        
    }
    else if (chosenPlayer == playerO) {
        chosenPlayer = playerX;
        otherPlayer = playerO;
        
    }
    return {chosenPlayer, otherPlayer}
}

const setChosenPlayer = (sign) => {
    if (sign == "X") {
        console.log("Test X")
        chosenPlayer = playerX;
        otherPlayer = playerO;
        
        
    }
    else if (sign == "O") {
        console.log("Test O")
        chosenPlayer = playerO;
        otherPlayer = playerX;
       
    }
    
    // return {chosenPlayer, otherPlayer}
}

const getChosenPlayer = () => {
    return chosenPlayer

}

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]

]

const checkWinner = () => {
    for (let win of winConditions) {
        let testSigns = [];
        for (let index of win) {
            
            testSigns.push(gameBoard.getBoard()[index])  
            console.log[testSigns]
        }
        let set1 = [...new Set(testSigns)] 
        if (set1.length === 1 && set1 != "") {
            //Need to implement turns function so this change is not necessary
            gameControls.changePlayer()

            gameBoard.message.innerHTML = "Winner is: " + chosenPlayer.name +" Loser is: " + otherPlayer.name
             
                // gameBoard.resetGame()
                // gameControls.changePlayer()
                // gameBoard.populateBoard()
                // // getChosenPlayer()
                // setChosenPlayer("X")
                 testSigns = [];
                 set1 = [];
                 setGameStatus(false);
             
             
        }      
        
}}
checkWinner(gameBoard.board);
const checkTie = () => {
    
    function checkSpot(spot) {
        return spot != ""
    }
    if (gameBoard.getBoard().every(checkSpot)) {
        gameBoard.message.innerHTML = "It's a tie!"
        setGameStatus(false);
    }
}
return {setChosenPlayer, getChosenPlayer, checkWinner,checkTie, playerX, playerO, chosenPlayer, otherPlayer, setPlayer, changePlayer, gameStatus, getGameStatus, setGameStatus}
})();