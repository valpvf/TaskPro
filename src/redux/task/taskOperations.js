import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBoardApi } from '../../services/backApi';

export const getBoard = createAsyncThunk('task/getBoard', async () => {
  //   console.log(1);
  const response = await getBoardApi('64c7c7d5e2d3e2b069fe01e9');
  console.log(2);
  return response.data;
});
