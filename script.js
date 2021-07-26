const gameBoard = (() => {
    let board = ["","","","","","","","",""];
    let sign = "X"
    const divGameBoard = document.querySelector("#div-game-board");
    const xSign = document.querySelector("#X");
    const oSign = document.querySelector("#O");

    oSign.addEventListener("click", function() {
        sign = gameControls.playerO.sign;   
        gameControls.setPlayer(sign)
        
        return {sign }
    })

   

    xSign.addEventListener("click", function() {
        sign = gameControls.playerX.sign;
        gameControls.setPlayer(sign)
        
        return sign
    })

    const populateBoard = () => {
    let index = 0;
    for (let square of board) {
        let newSquare = document.createElement("div")
        let newSign = document.createElement("p");

        newSquare.style.border = "1px solid black";
        newSquare.style.width = "300px";
        newSquare.style.height = "300px";
        newSquare.id = index;
        newSquare.className = "square";

        newSign.innerHTML = square;

        newSquare.addEventListener("click", function() {
            let divIndex = newSquare.id;
            if (board[divIndex] !== ""){
                return;
            }
            else {
            board[divIndex] = sign;
            clearBoard()
            populateBoard()
            gameControls.checkWinner()}
        })

        newSquare.appendChild(newSign);
        divGameBoard.appendChild(newSquare)
        index += 1}
       
    }
    function clearBoard() {
                while (divGameBoard.hasChildNodes()) {
                    divGameBoard.removeChild(divGameBoard.firstChild);
                }}
    populateBoard();
                
        
    
    
    
   return {
       board, populateBoard, sign
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
        console.log(chosenPlayer)
    }
    else if (sign == "O") {
        chosenPlayer = playerO;
        otherPlayer = playerX;
        console.log(chosenPlayer)
    }
    return {chosenPlayer, otherPlayer}
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
            testSigns.push(gameBoard.board[index])  
        }
        let set1 = [...new Set(testSigns)] 
        if (set1.length === 1 && set1 != "") {
            console.log("Winner is: " + chosenPlayer.name +" Loser is: " + otherPlayer.name)
        }

        
        
}}
checkWinner(gameBoard.board);

return {checkWinner, playerX, playerO, chosenPlayer, setPlayer}
})();