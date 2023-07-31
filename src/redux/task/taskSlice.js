import { createSlice } from '@reduxjs/toolkit';
// import { changeUser, getUser } from './userOperations';
import { getBoard } from './taskOperations';

const initialState = {
  board: [
    {
      _id: '123411',
      title: 'Project',
      icon: 'icon-star',
      background: '04',
    },
  ],
  column: [
    {
      _id: '123421',
      title: 'Project',
    },
  ],
  task: [
    {
      _id: '123431',
      title: '',
      description: '',
      priority: 'Without',
      deadline: 1690718996895,
    },
  ],
  error: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    changePart: (state, { payload }) => {
      state.part += payload;
    },
    changeBackground: (state, { payload }) => {
      const boardIndex = state.board.findIndex(
        board => board._id === payload._id
      );
      if (boardIndex !== -1) {
        state.board[boardIndex].background = payload.background;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBoard.pending, state => {
        state.error = null;
      })
      .addCase(getBoard.fulfilled, (state, { payload }) => {
        state.error = null;
        state.board = payload;
      })
      .addCase(getBoard.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { changePart, changeBackground } = taskSlice.actions;
export default taskSlice.reducer;
