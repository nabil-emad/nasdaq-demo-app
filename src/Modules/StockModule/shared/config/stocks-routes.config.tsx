import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import SplashScreen from 'src/Shared/components/core-ui/splash-screen/splash-screen';
import { APP_ROUTES } from 'src/Shared/config/routes.config';
import { RouteConfig } from 'src/Shared/interfaces/routes-config.interface';

const StocksListContainer = React.lazy(
  () => import('../../containers/stocks-list/stocks-list.container')
);

export const StocksRoutesConfig: RouteObject[] = [
  {
    index: true,
    element: <Navigate to={(APP_ROUTES.STOCKS_MODULE.CHILDREN as RouteConfig).LIST.FULL_PATH} />
  },
  {
    path: (APP_ROUTES.STOCKS_MODULE.CHILDREN as RouteConfig).LIST.FULL_PATH,
    element: (
      <React.Suspense fallback={<SplashScreen />}>
        <StocksListContainer />
      </React.Suspense>
    )
  }
];
