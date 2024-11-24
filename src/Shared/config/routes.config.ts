import { RouteConfig } from '../interfaces/routes-config.interface';

export const APP_ROUTES: RouteConfig = {
  STOCKS_MODULE: {
    PATH: '/stocks',
    FULL_PATH: '/stocks',
    NAME: 'stocks',

    CHILDREN: {
      LIST: {
        PATH: '/stocks/list',
        FULL_PATH: '/stocks/list',
        NAME: 'List'
      }
    }
  }
};
