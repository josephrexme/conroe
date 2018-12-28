import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import trailers from './trailers';
import name from './name';

export default history => combineReducers({
  router: connectRouter(history),
  trailers,
  name,
});
