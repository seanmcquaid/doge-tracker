import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getDogeInfo } from '../../queries';

const Chart = () => {
  const { data, error } = useQuery('getDogeInfo', getDogeInfo, {
    // refetchInterval: 1500
  });

  return <ChartContainer></ChartContainer>;
};

const ChartContainer = styled.div``;

export default Chart;
