import { createSlice } from '@reduxjs/toolkit';
// import { changeUser, getUser } from './userOperations';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    changePart: (state, { payload }) => {
      state.part += payload;
    },
  },
});

export const { changePart } = tasksSlice.actions;
export default tasksSlice.reducer;
