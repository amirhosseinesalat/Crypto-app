const BASE_URL = "https://api.coingecko.com/api/v3";
const API_URL = "CG-trciANWVDPo42xixPXcoY1qy";
const getCoinList = (page,currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_URL}`;
};
export default getCoinList;
