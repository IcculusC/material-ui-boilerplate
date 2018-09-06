// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';
import CssBaseline from '@material-ui/core/CssBaseline';

import DemoCssBaseline from './common/DemoCssBaseline';
import Home from './pages/home.js';
import PageNotFound from './pages/pageNotFound.js';

const root = (
  <React.Fragment>
    <CssBaseline />
    <DemoCssBaseline />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  </React.Fragment>
);

export default root;
