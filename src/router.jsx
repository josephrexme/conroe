import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import ErrorBoundary from './components/ErrorBoundary';
import { NotFound } from './components/Errors';
import Navigation from './components/Navigation';
import Home from './components/Home';

const GlobalStyle = createGlobalStyle`
  *{ box-sizing: border-box }
  :root{
    --color-bg: #000;
    --color-fg: #fff;
  }
  body{
    background: var(--color-bg);
    color: var(--color-fg);
  }
`;

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
