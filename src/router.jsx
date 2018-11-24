import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => (
  <h1>Hello Home</h1>
);

const AppRouter = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);

export default AppRouter;
