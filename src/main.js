// @flow
import App from 'fusion-react';
import Router, {RouterToken, RouterProviderToken} from 'fusion-plugin-react-router';
import ConnectedRouterEnhancer from 'fusion-plugin-connected-react-router';
import {ConnectedRouter} from 'connected-react-router';
import Redux, {
  ReduxToken,
  ReducerToken,
  EnhancerToken,
  GetInitialStateToken,
} from 'fusion-plugin-react-redux';
import I18n, {
  I18nToken,
  I18nLoaderToken,
  createI18nLoader,
} from 'fusion-plugin-i18n-react';
import {FetchToken} from 'fusion-tokens';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';
import MuiThemeProvider, {MuiThemeProviderToken} from 'fusion-plugin-material-ui';
import fetch from 'unfetch';

import root from './root.js';

const reducer = (state = 0, action) => {
  return state;
}

export default () => {
  const app = new App(root);
  app.register(ReduxToken, Redux);
  app.register(ReducerToken, reducer);
  app.register(I18nToken, I18n);
  app.register(RouterToken, Router);
  app.register(EnhancerToken, ConnectedRouterEnhancer);
  app.register(RouterProviderToken, ConnectedRouter);
  app.register(MuiThemeProviderToken, MuiThemeProvider);

  app.register(HelmetPlugin);
  
  __NODE__ && app.register(GetInitialStateToken, async ctx => ({}));
  __NODE__
    ? app.register(I18nLoaderToken, createI18nLoader())
    : app.register(FetchToken, fetch);

  return app;
};
