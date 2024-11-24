import axios from 'axios';

const SERVER_BASE_URL = 'https://api.polygon.io';

const create = (baseURL = SERVER_BASE_URL, params?: any) => {
  return axios.create({
    baseURL,
    params,
    headers: {
      Authorization: 'Bearer nwMCGpGGYqBC7x6zHJH6IhcFgIC8baMZ'
    }
  });
};

const api = create();

export default api;
