import { createSlice } from '@reduxjs/toolkit';

// import { changeUser, getUser } from './userOperations';
import {
  getBoardId,
  addColumn,
  editColumn,
  deleteColumn,
  addCard,
  editCard,
  deleteCard,
} from './taskOperations';

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
        // state.error = null;
      })
      .addCase(getBoardId.fulfilled, (state, { payload }) => {
        // state.error = null;
        console.log(payload);
        return { ...payload, error: null };
      })
      .addCase(getBoardId.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addColumn.pending, state => {
        //state.set('isRefreshing', true);
        // console.log('state-auth');
        // state.error = null;
      })
      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.columns.push(payload);
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editColumn.pending, state => {
        // state.error = null;
      })
      .addCase(editColumn.fulfilled, (state, { payload }) => {
        const index = state.columns.findIndex(col => col._id === payload._id);
        console.log('payloadColumn', payload);
        state.columns[index].title = payload.title;
      })
      .addCase(editColumn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteColumn.pending, state => {})
      .addCase(deleteColumn.fulfilled, (state, { payload }) => {
        state.columns = state.columns.filter(col => col._id !== payload.id);
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addCard.pending, state => {
        // state.error = null;
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
        // state.error = null;
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
      .addCase(deleteCard.pending, state => {})
      .addCase(deleteCard.fulfilled, (state, { payload }) => {
        const { column, _id: id } = payload;
        const index = state.columns.findIndex(col => col._id === column);
        state.columns[index].tasks = state.columns[index].tasks.filter(
          el => el._id !== id
        );
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { changePart, changeBackground, setBoardActive } =
  boardSlice.actions;
export default boardSlice.reducer;
