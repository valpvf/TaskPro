import axios from 'axios';

const baseUrl = 'https://taskspro-backend.onrender.com';

// /api/boards
// /api/columns
// /api/tasks

axios.defaults.baseURL = baseUrl;

/* ================== BOARD =========================== */
export const addBoardApi = async boardForm => {
  return await axios.post('/api/boards', { ...boardForm }).then(res => res);
};

export const getBoardApi = async ({ id }) => {
  return await axios.get(`/api/boards/${id}`).then(res => res);
};

export const deleteBoardApi = async boardId => {
  return await axios.delete(`/api/boards/${boardId}`).then(res => res);
};
