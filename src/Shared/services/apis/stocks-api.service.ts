import api from '../../config/http.config';

const searchStocks = async (params: any) => {
  const { data } = await api.get('/v3/reference/tickers', { params });
  return data;
};

const apis = {
  searchStocks
};

export const stocksApi = apis;
