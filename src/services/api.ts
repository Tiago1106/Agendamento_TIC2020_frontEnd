import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.56.1:3333',
  baseURL: 'http://192.168.100.196:3333', // pelo cel wifi
});

export default api;
