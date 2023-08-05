import axios from 'axios';
import { toast } from 'react-toastify';

async function fetchHelpApi(data) {
  try {
    const response = await axios.post(
      `https://taskspro-backend.onrender.com/api/help`,
      { ...data }
    );
    toast.success('You message sent to the Customer Service');
    return response;
  } catch (e) {
    toast.error(e.payload);
    return e.message;
  }
}

export default fetchHelpApi;
