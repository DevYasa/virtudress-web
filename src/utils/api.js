import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

// Add a method for public routes
api.public = axios.create({
  baseURL: 'http://localhost:5000/api/public',
});

export default api;