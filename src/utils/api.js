import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // adjust this URL as needed
  withCredentials: true,
});

export default api;