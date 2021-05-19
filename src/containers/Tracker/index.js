import { lazy, Suspense } from 'react';
import { BarLoader } from 'react-spinners';
import styled from 'styled-components';

const Chart = lazy(() => import('./Chart'));

const Tracker = () => {
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
