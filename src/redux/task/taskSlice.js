import { createSlice } from '@reduxjs/toolkit';

import {
  getBoardId,
  addColumn,
  editColumn,
  deleteColumn,
  addCard,
  editCard,
  deleteCard,
  replaceCard,
} from './taskOperations';
import { logout } from 'redux/auth/authOperations';

const initialState = {
  _id: '64c772d4906c009cfba4f8a9',
  title: '',
  icon: 'icon-project',
  background: '00',
  columns: [
    {
      _id: '64c7a72cef9d0ebaa3b7b7b9',
      title: 'Column2',
      tasks: [
        {
          _id: '64c7b6a27e966dce4df1fc5a',
          title: 'Task',
          description: '',
          priority: 'Without',
          deadline: '2023-07-31T13:26:58.053Z',
          updatedAt: '2023-07-31T13:26:58.060Z',
        },
        {
          _id: '64c7b6fd7e966dce4df1fc5e',
          title: 'Task1',
          description: 'Description for test task',
          priority: 'Medium',
          deadline: '2023-08-06T21:30:09.640Z',
          updatedAt: '2023-07-31T13:31:14.219Z',
        },
      ],
      updatedAt: '2023-07-31T13:28:30.055Z',
    },
    {
      _id: '64c7a744ef9d0ebaa3b7b7c0',
      title: 'Column101',
      tasks: [],
      updatedAt: '2023-07-31T13:02:51.175Z',
    },
  ],
  error: null,
  isRefreshing: false,
};

const boardSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    changePart: (state, { payload }) => {
      state.part += payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBoardId.pending, state => {
        state.error = null;
      })
      .addCase(getBoardId.fulfilled, (state, { payload }) => {
        state.error = null;
        return { ...payload, error: null };
      })
      .addCase(getBoardId.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addColumn.pending, state => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.columns.push(payload);
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editColumn.pending, state => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(editColumn.fulfilled, (state, { payload }) => {
        const index = state.columns.findIndex(col => col._id === payload._id);
        state.columns[index].title = payload.title;
      })
      .addCase(editColumn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteColumn.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(deleteColumn.fulfilled, (state, { payload }) => {
        state.columns = state.columns.filter(col => col._id !== payload.id);
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addCard.pending, state => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(addCard.fulfilled, (state, { payload }) => {
        const { column, ...task } = payload;
        const index = state.columns.findIndex(col => col._id === column);
        state.columns[index].tasks.push(task.data);
      })
      .addCase(addCard.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editCard.pending, state => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(editCard.fulfilled, (state, { payload }) => {
        const { column, ...task } = payload;
        const index = state.columns.findIndex(col => col._id === column);
        const indexTask = state.columns[index].tasks.findIndex(
          el => el._id === task._id
        );
        state.columns[index].tasks[indexTask] = { ...task };
      })
      .addCase(editCard.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteCard.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(deleteCard.fulfilled, (state, { payload }) => {
        const { column, _id: id } = payload;
        const index = state.columns.findIndex(col => col._id === column);
        state.columns[index].tasks = state.columns[index].tasks.filter(
          el => el._id !== id
        );
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(replaceCard.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(replaceCard.fulfilled, (state, { payload }) => {
        const { columnNew, idCard, columnOld } = payload;
        const indexOld = state.columns.findIndex(col => col._id === columnOld);
        const indexNew = state.columns.findIndex(col => col._id === columnNew);
        const task = state.columns[indexOld].tasks.filter(
          el => el._id === idCard
        );
        state.columns[indexOld].tasks = state.columns[indexOld].tasks.filter(
          el => el._id !== idCard
        );
        state.columns[indexNew].tasks.push(task[0]);
      })
      .addCase(replaceCard.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.title = '';
        state.background = '00';
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isRefreshing = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, { payload }) => {
          state.isRefreshing = false;
        }
      );
  },
});

export const { changePart, changeBackground, setBoardActive } =
  boardSlice.actions;
export default boardSlice.reducer;
