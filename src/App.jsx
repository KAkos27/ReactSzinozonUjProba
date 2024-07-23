import { useState } from "react";

import ControlPanel from "./components/control_panel/ControlPanel";
import GameBoard from "./components/game_board/GameBoard";
import HiddenColors from "./components/hidden_colors/HiddenColors";
import ResponseBar from "./components/response_bar/ResponseBar";
import { INITIAL_GAME_STATUS } from "./initialGameStatus.js";

const INITIAL_COLORS = ["red", "blue", "green", "yellow", "orange", "purple"];

function App() {
  const [game, setGame] = useState(INITIAL_GAME_STATUS);

  const handleColorPick = (event) => {
    setGame((prevGame) => {
      const updatedGame = { ...prevGame };
      const i = updatedGame.roundCount;
      updatedGame.gameBoard[i] = event.target.id;
      updatedGame.roundCount++;
      console.log(game);
      console.log(INITIAL_GAME_STATUS);
      return updatedGame;
    });
  };

  const handleNewGame = () => {
    const INITIAL_GAME_BOARD = new Array(36).fill(null);

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
      hiddenColors: hiddenColors,
      gameBoard: INITIAL_GAME_BOARD,
      responses: INITIAL_GAME_BOARD,
    });
  };

  return (
    <div className="app">
      <HiddenColors hiddenColors={game.hiddenColors} />
      <ResponseBar responses={game.responses} />
      <GameBoard board={game.gameBoard} />
      <ControlPanel
        onColorPick={handleColorPick}
        onNewGame={handleNewGame}
        colors={INITIAL_COLORS}
      />
    </div>
  );
}

export default App;
