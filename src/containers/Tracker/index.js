import styled from 'styled-components';
import Chart from './Chart';
import { Suspense } from 'react';
import { BarLoader } from 'react-spinners';
import { useQuery } from 'react-query';
import { getDogeInfo } from '../../queries';

const Tracker = () => {
  const { data, error } = useQuery('getDogeInfo', getDogeInfo, {
    refetchInterval: 1500,
  });
  return (
    <TrackerContainer>
      <Header></Header>
      <Main>
        <Suspense fallback={<BarLoader />}>
          <Chart />
        </Suspense>
      </Main>
    </TrackerContainer>
  );
};

const TrackerContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Tracker;
