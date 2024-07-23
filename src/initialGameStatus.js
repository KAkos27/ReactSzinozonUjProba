const INITIAL_HIDDEN_COLORS = [null, null, null, null];
const INITIAL_GAME_BOARD = new Array(36).fill(null);
const INITIAL_RESPONSES_TO_ADD = new Array(36).fill(null);
const INITIAL_RESPONSES = new Array(36).fill(null);

export const INITIAL_GAME_STATUS = {
  roundCount: 0,
  rowCount: 0,
  visible: true,
  hiddenColors: INITIAL_HIDDEN_COLORS,
  gameBoard: INITIAL_GAME_BOARD,
  responsesToAdd: INITIAL_RESPONSES_TO_ADD,
  responses: INITIAL_RESPONSES,
};
