import axios from 'axios';

const key = process.env.REACT_APP_API_KEY || '';

export const getDogeInfo = async () => {
  const response = await axios.get(
    'https://api.nomics.com/v1/currencies/ticker',
    {
      params: key,
      ids: 'BTC,ETH,XRP',
      interval: '1d,30d',
      convert: 'EUR',
      'per-page': '100',
      page: '1',
    }
  );

  return response?.data;
};
