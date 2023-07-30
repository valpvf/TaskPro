import { createSlice } from '@reduxjs/toolkit';
// import { changeUser, getUser } from './userOperations';

const initialState = {
  board: [
    {
      _id: '123411',
      title: 'Project',
      icon: 'icon-star',
      background: '00',
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
