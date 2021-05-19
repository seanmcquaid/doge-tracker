import { QueryClientProvider, QueryClient } from 'react-query';
import Tracker from './Tracker';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Tracker />
  </QueryClientProvider>
);

export default App;
