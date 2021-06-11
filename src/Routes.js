import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { createBrowserHistory as history } from 'history';

const PageList = lazy(() => import('./scenes/MovieList/MovieListPage'));
const PageDetail = lazy(() => import('./scenes/MovieDetail/MovieDetailPage'));

function Routes() {
  return (
    <Router history={history}>
      <ScrollToTop>
        <Switch>
          <Route exact={true} path="/" component={PageList} />
          <Route exact={true} path="/movie/:id" component={PageDetail} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default Routes;
