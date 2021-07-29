const gameBoard = (() => {
    let board = ["","","","","","","","",""];
    let sign = "X"
    const divGameBoard = document.querySelector("#div-game-board");
    const xSign = document.querySelector("#X");
    const oSign = document.querySelector("#O");
    const message = document.querySelector("#message")

    oSign.addEventListener("click", function() {
        gameControls.setChosenPlayer("O")  
    })

   

    xSign.addEventListener("click", function() {
        gameControls.setChosenPlayer("X")
       
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
            gameControls.getChosenPlayer()
            let divIndex = newSquare.id;
            if (board[divIndex] !== ""){
                return;
            }
            else {
           
            gameBoard.getBoard()[divIndex] = gameControls.getChosenPlayer().sign;
            clearBoard()
            populateBoard()
            gameControls.checkWinner()
            gameControls.changePlayer()
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
        // gameControls.setChosenPlayer("X");
        gameBoard.clearBoardArray()
       
    }
    populateBoard();
                
        
    
    
    
   return {
       board, populateBoard, sign, message, resetGame, getBoard, clearBoardArray
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
            gameBoard.message.innerHTML = "Winner is: " + chosenPlayer.name +" Loser is: " + otherPlayer.name
             if (confirm("Do you want to play again?") === true) {
                 gameBoard.resetGame()
                gameBoard.populateBoard()
                 testSigns = [];
                 set1 = [];
                 console.log(gameBoard.board)
             }
        }

        
        
}}
checkWinner(gameBoard.board);

return {setChosenPlayer, getChosenPlayer, checkWinner, playerX, playerO, chosenPlayer, otherPlayer, setPlayer, changePlayer}
})();