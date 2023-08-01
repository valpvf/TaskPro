import { createAsyncThunk } from '@reduxjs/toolkit';
import { addColumnApi } from '../../services/backApi';

// export const getBoard = createAsyncThunk('task/getBoard', async () => {
//   //   console.log(1);
//   const response = await getBoardApi('64c7c7d5e2d3e2b069fe01e9');
//   console.log(2);
//   return response.data;
// });

export const addColumn = createAsyncThunk(
  'column/add',
  async (columnForm, { rejectWithValue, dispatch }) => {
    // columnForm
    console.log('columnForm', columnForm);

    try {
      const { data } = await addColumnApi(columnForm);
      console.log('data', data);
      // return data;
    } catch (error) {
      // dispatch(errorHandler({ error, cb: () => addColumn(columnForm) }));
      return rejectWithValue(error.message);
    }
  }
);
