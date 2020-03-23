import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cryptic-activist-podcast-api.herokuapp.com',
});

export default api;
