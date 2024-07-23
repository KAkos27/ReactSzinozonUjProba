import "./GameBoard.css";

const GameBoard = ({ board }) => {
  return (
    <div className="game-board">
      {board.map((square, i) => (
        <span key={"s" + i} className={square}></span>
      ))}
    </div>
  );
};

export default GameBoard;
