export const selectBoard = state => state.auth.board;
export const getBoardId = state => state.board.board._id;
export const getBoardName = state => state.board.board.title;
export const getBoardBg = state => state.board.board.background;
export const getColumn = state => state.board.board.columns;
