// api.js

import axios from 'axios';

const BASE_URL = 'http://localhost:3001';  // Replace with your actual backend URL

export const postContactForm = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/contact`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
