import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router"

import Layout   from "./pages/Layout";
import Todos    from "./pages/Todos";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Todos}></IndexRoute>
      <Route path="todos" component={Todos}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
  app
);
