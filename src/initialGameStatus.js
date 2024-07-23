const INITIAL_HIDDEN_COLORS = [null, null, null, null];
const INITIAL_GAME_BOARD = new Array(36).fill(null);

export const INITIAL_GAME_STATUS = {
  roundCount: 0,
  hiddenColors: INITIAL_HIDDEN_COLORS,
  gameBoard: INITIAL_GAME_BOARD,
  responses: INITIAL_GAME_BOARD,
};
