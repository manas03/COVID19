import axios from "axios";
const key='pk_c448b52123c444b2ba78f2652f918dc3'
//sk_3bbb01fd7661492ea8419765d44d162a-old
//pk_c448b52123c444b2ba78f2652f918dc3-new

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
