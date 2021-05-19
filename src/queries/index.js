import axios from 'axios';

const url = `https://api.nomics.com`;

const key = process.env.REACT_APP_API_KEY;

export const getDogeInfo = async () => {
  const response = await axios.get(`${url}/v1/currencies/ticker`, {
    params: {
      key,
      ids: 'DOGE',
      interval: '1d,30d',
    },
  });

  return response?.data;
};
