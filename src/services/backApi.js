import axios from 'axios';

const baseUrl = 'https://taskspro-backend.onrender.com';

axios.defaults.baseURL = baseUrl;

/* ================== BOARD =========================== */
export const addBoardApi = async boardForm => {
  return await axios.post('/boards', { ...boardForm }).then(res => res);
};

export const getBoardApi = async ({ id }) => {
  return await axios.get(`/boards/${id}`).then(res => res);
};

export const deleteBoardApi = async boardId => {
  return await axios.delete(`/boards/${boardId}`).then(res => res);
};

export const addColumnApi = async columnForm => {
  return await axios.post('/api/columns/', { ...columnForm }).then(res => res);
};

export const getColumnApi = async ({ id }) => {
  return await axios.get(`/columns/${id}`).then(res => res);
};

export const deleteColumnApi = async columnId => {
  return await axios.delete(`/columns/${columnId}`).then(res => res);
};
