import { QueryClientProvider, QueryClient } from 'react-query';
import Tracker from './Tracker';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Tracker />
  </QueryClientProvider>
);

export default App;
