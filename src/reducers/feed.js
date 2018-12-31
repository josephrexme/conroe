const initialState = {
  ready: 'initial',
  entries: [],
};

const feed = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_FEED':
      return {
        ready: 'loading',
        entries: [],
      };
    case 'FETCH_FEED':
      return {
        ready: 'loaded',
        entries: action.payload,
      };
    case 'ERROR_FEED':
      return {
        ready: 'error',
        entries: action.payload,
      };
    default:
      return state;
  }
};

export default feed;
