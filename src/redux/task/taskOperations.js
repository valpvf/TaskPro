import { createAsyncThunk } from '@reduxjs/toolkit';
import { addCardApi, addColumnApi, getBoardApi } from '../../services/backApi';

export const getBoardId = createAsyncThunk(
  'task/getBoard',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await getBoardApi(id);
      return data;
    } catch (error) {
      // dispatch(errorHandler({ error, cb: () => addColumn(columnForm) }));
      return rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'column/add',
  async (columnForm, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addColumnApi(columnForm);
      console.log('data', data);
      return data;
    } catch (error) {
      // dispatch(errorHandler({ error, cb: () => addColumn(columnForm) }));
      return rejectWithValue(error.message);
    }
  }
);

export const addCard = createAsyncThunk(
  'card/add',
  async (form, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addCardApi(form);
      console.log('data', data);
      return data;
    } catch (error) {
      // dispatch(errorHandler({ error, cb: () => addColumn(columnForm) }));
      return rejectWithValue(error.message);
    }
  }
);
