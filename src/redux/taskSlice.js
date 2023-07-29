import { createSlice } from '@reduxjs/toolkit';
// import { changeUser, getUser } from './userOperations';

const initialState = {
  board: {
    title: '',
    icon: '',
    background: '00',
  },
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    changePart: (state, { payload }) => {
      state.part += payload;
    },
  },
});

export const { changePart } = taskSlice.actions;
export default taskSlice.reducer;
