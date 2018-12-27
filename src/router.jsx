import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import reduxThunk from 'redux-thunk';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';
import ErrorBoundary from './components/ErrorBoundary';
import { NotFound } from './components/Errors';
import GlobalStyle from './components/GlobalStyle';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Name from './components/Name';
import createRootReducer from './reducers';

ReactGA.initialize('UA-56161232-6');
ReactGA.pageview(`${window.location.pathname}${window.location.search}`);

const history = createHistory();
const store = createStore(
  createRootReducer(history),
  applyMiddleware(reduxThunk, routerMiddleware(history))
);

const AppRouter = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Fragment>
          <GlobalStyle />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/title/:id" component={() => 'Hi'} />
            <Route path="/name/:id" component={Name} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Fragment>
      </ConnectedRouter>
    </Provider>
  </ErrorBoundary>
);

export default AppRouter;
