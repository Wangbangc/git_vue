import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8081/api',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

export default apiClient; 