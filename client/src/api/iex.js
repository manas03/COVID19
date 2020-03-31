import axios from "axios";
const key='sk_3bbb01fd7661492ea8419765d44d162a'

const api = axios.create({
  
  baseURL: `https://cloud.iexapis.com/v1/`
});
//

export const loadQuotesForStock = symbol => {
  return api.get(`/stock/${symbol}/quote?token=${key}`).then(res => res.data);
};

export const loadLogoForStock = symbol => {
  return api.get(`/stock/${symbol}/logo?token=${key}`).then(res => res.data.url);
};

export const loadRecentNewsForStock = symbol => {
  return api.get(`/stock/${symbol}/news?token=${key}`).then(res => res.data);
};

export const loadChartForStock = (symbol, range) => {
  return api.get(`/stock/${symbol}/chart/${range}?token=${key}`).then(res => res.data);
};
