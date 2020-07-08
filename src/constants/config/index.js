export const API_URL = process.env.NODE_ENV === 'production'
  ? 'http://localhost:5000/api'
  : 'http://localhost:5000/api';

export const HOST_URL = process.env.NODE_ENV === 'production'
  ? 'http://localhost:3000'
  : 'http://localhost:3000';
