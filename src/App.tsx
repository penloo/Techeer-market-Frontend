import { QueryClientProvider } from '@tanstack/react-query';
import { getClient } from './queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRoutes } from 'react-router-dom';
import { routes } from './Router';
import React from 'react';
import Loading from './components/Loading';
import { useTokenRefreshTimer } from '@/hooks/useTokenRefreshTimer';

function App() {
  const queryClient = getClient();
  const elem = useRoutes(routes);

  useTokenRefreshTimer();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <React.Suspense fallback={<Loading />}>{elem}</React.Suspense> */}
      {elem}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
