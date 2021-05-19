import { useQuery } from 'react-query';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';
import { getCryptoInfo } from '../../queries';

const Chart = () => {
  const { data } = useQuery('getCryptoInfo', getCryptoInfo, {
    // refetchInterval: 1500
  });

  console.log(data);

  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='id' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='price' fill='#8884d8' />
      <Bar dataKey='high' fill='#82ca9d' />
    </BarChart>
  );
};

const ChartContainer = styled.div``;

export default Chart;
