import ReactDOM from 'react-dom/client';

import AppProvider from './Shared/context';
import reportWebVitals from './reportWebVitals';
import { useRoutes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { APP_ROUTES } from './Shared/config/routes.config';
import { StocksRoutesConfig } from './Modules/StockModule/shared/config/stocks-routes.config';
import { StrictMode } from 'react';
import CustomTheme from './Shared/themes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const App = () => {
  const routes = useRoutes([
    {
      index: true,
      element: <Navigate to={APP_ROUTES.STOCKS_MODULE.FULL_PATH} />
    },
    {
      path: APP_ROUTES.STOCKS_MODULE.FULL_PATH,
      children: StocksRoutesConfig
    }
  ]);

  return routes;
};

root.render(
  // <StrictMode>
  <AppProvider>
    <CustomTheme>
      <App />
    </CustomTheme>
  </AppProvider>
  // </StrictMode>
);

reportWebVitals();
