import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';

import { HashRouter, Route, Switch } from 'react-router-dom';

import Login from './Login';

import Content from './Content';

ReactDOM.render(
  <HashRouter>
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Content} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
