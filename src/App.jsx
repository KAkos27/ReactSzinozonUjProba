import { useState } from "react";

import ControlPanel from "./components/control_panel/ControlPanel";
import GameBoard from "./components/game_board/GameBoard";
import HiddenColors from "./components/hidden_colors/HiddenColors";
import ResponseBar from "./components/response_bar/ResponseBar";
import { INITIAL_GAME_STATUS } from "./initialGameStatus.js";

const INITIAL_COLORS = ["red", "blue", "green", "yellow", "orange", "purple"];

const checkForGameEnd = (game) => {
  const gameEndHandler = (gameEndMessage) => {
    game.visible = true;
    setTimeout(() => {
      alert(gameEndMessage);
    }, 1);
  };

  if (
    game.responses[game.roundCount - 1] === "black" &&
    game.responses[game.roundCount - 2] === "black" &&
    game.responses[game.roundCount - 3] === "black" &&
    game.responses[game.roundCount - 4] === "black"
  ) {
    gameEndHandler("Győzelem");
  } else if (game.roundCount === 36) {
    gameEndHandler("Vereség");
  }

  return game;
};

function App() {
  const [game, setGame] = useState(INITIAL_GAME_STATUS);

  const handleColorPick = (event) => {
    setGame((prevGame) => {
      const updatedGame = { ...prevGame };
      const i = updatedGame.roundCount;
      const ri = updatedGame.rowCount;
      updatedGame.gameBoard[i] = event.target.id;

      if (updatedGame.gameBoard[i] === updatedGame.hiddenColors[ri]) {
        updatedGame.responsesToAdd[i] = "black";
      } else if (updatedGame.hiddenColors.includes(updatedGame.gameBoard[i])) {
        updatedGame.responsesToAdd[i] = "gray";
      }

      if (updatedGame.rowCount === 3) {
        updatedGame.responses = [...updatedGame.responsesToAdd];
      }

      updatedGame.roundCount++;
      updatedGame.rowCount++;

      if (updatedGame.rowCount === 4) {
        updatedGame.rowCount = 0;
      }

      const checkedGame = checkForGameEnd(updatedGame);
      return checkedGame;
    });
  };

  const handleNewGame = () => {
    const INITIAL_GAME_BOARD = new Array(36).fill(null);
    const INITIAL_RESPONSES_TO_ADD = new Array(36).fill(null);
    const INITIAL_RESPONSES = new Array(36).fill(null);

    const hiddenColors = [...game.hiddenColors];
    hiddenColors.forEach((color, i) => {
      do {
        const index = Math.floor(Math.random() * 6);
        color = INITIAL_COLORS[index];
      } while (hiddenColors.includes(color));
      hiddenColors[i] = color;
    });

    setGame({
      roundCount: 0,
      rowCount: 0,
      visible: false,
      hiddenColors: hiddenColors,
      gameBoard: INITIAL_GAME_BOARD,
      responsesToAdd: INITIAL_RESPONSES_TO_ADD,
      responses: INITIAL_RESPONSES,
    });
  };

  return (
    <div className="app">
      <HiddenColors hiddenColors={game.hiddenColors} visible={game.visible} />
      <ResponseBar responses={game.responses} />
      <GameBoard board={game.gameBoard} />
      <ControlPanel
        onColorPick={handleColorPick}
        onNewGame={handleNewGame}
        colors={INITIAL_COLORS}
        visible={!game.visible}
      />
    </div>
  );
}

export default App;
