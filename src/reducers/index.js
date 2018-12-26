import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const trailers = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_TRAILERS':
      return [];
    default:
      return state;
  }
};

export default history => combineReducers({
  router: connectRouter(history),
  trailers,
});
