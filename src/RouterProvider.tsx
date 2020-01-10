import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Page404 from './views/page404';

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route component={Page404} />
      </Switch>
  </BrowserRouter>
  );
}

export default RouterProvider;
