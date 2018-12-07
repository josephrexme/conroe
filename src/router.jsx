import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { NotFound } from './components/Errors';
import GlobalStyle from './components/GlobalStyle';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Name from './components/Name';

const AppRouter = () => (
  <ErrorBoundary>
    <Router>
      <React.Fragment>
        <GlobalStyle />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/title/:id" component={() => 'Hi'} />
          <Route path="/name/:id" component={Name} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  </ErrorBoundary>
);

export default AppRouter;
