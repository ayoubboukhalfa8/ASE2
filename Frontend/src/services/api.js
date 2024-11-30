import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api' });

export const fetchOffers = () => API.get('/offers/');
export const fetchSubscriptions = (token) =>
  API.get('/subscriptions/', { headers: { Authorization: `Bearer ${token}` } });
export const register = (data) => API.post('/customers/register/', data);
