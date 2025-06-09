import axios from 'axios';

const API_URL = 'http://localhost:3000/api/chat'; // URL del backend

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data.response; // Retorna la respuesta del backend
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to communicate with the backend');
  }
};