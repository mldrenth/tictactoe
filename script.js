const gameBoard = (() => {
    let board = ["O","X","","","","","","",""];
    let sign = "X"
    const divGameBoard = document.querySelector("#div-game-board");
    const xSign = document.querySelector("#X");
    const oSign = document.querySelector("#O");

    oSign.addEventListener("click", function() {
        sign = "O";      
        return sign
    })


    xSign.addEventListener("click", function() {
        sign = "X";
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
            board[divIndex] = sign;
            clearBoard()
            populateBoard()
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



const Player = (sign) => {

}