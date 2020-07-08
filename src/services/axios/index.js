import axios from 'axios';

import { API_URL } from 'constants/config';

export default axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
