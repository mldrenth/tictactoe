const gameBoard = (() => {
    let board = ["O","X","","","","","","",""];
    const divGameBoard = document.querySelector("#div-game-board");

    const populateBoard = () => {
    for (let square of board) {
        let newSquare = document.createElement("div")
        let newSign = document.createElement("p");

        newSquare.style.border = "1px solid black";
        newSquare.style.width = "300px";
        newSquare.style.height = "300px";

        newSign.innerHTML = square;

        newSquare.appendChild(newSign);
        divGameBoard.appendChild(newSquare)}

    }

    const changeSign = () => {
        
    }

    return {
        populateBoard
    };
    
  
})();
gameBoard.populateBoard();

const Player = (sign) => {

}