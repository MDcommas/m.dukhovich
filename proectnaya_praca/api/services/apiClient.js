import axios from 'axios';

const BASE_URL = 'https://petstore.swagger.io/v2';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  validateStatus: () => true
});
