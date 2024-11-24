import React, { ReactNode, Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { Error } from '../components/core-ui/error/error.component';
import SplashScreen from '../components/core-ui/splash-screen/splash-screen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  const [showSplash, setShowSplash] = useState(true);

  const queryClient = new QueryClient();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<SplashScreen />}>
        <ErrorBoundary FallbackComponent={Error}>
          <BrowserRouter basename={'/'}>{showSplash ? <SplashScreen /> : children}</BrowserRouter>
        </ErrorBoundary>
      </Suspense>
    </QueryClientProvider>
  );
}

export default AppProvider;
