import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { NotFound } from './components/Errors';
import GlobalStyle from './components/GlobalStyle';
import Navigation from './components/Navigation';
import Home from './components/Home';

const AppRouter = () => (
  <ErrorBoundary>
    <Router>
      <React.Fragment>
        <GlobalStyle />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/title/:id" component={() => 'Hi'} />
          <Route path="/name/:id" component={() => 'Hi'} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
  </ErrorBoundary>
);

export default AppRouter;
