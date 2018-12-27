const initialState = {
  ready: 'initial',
  list: [],
};

const trailers = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_TRAILERS':
      return {
        ready: 'loading',
        list: []
      };
    case 'FETCH_TRAILERS':
      return {
        ready: 'loaded',
        list: action.payload,
      };
    case 'ERROR_TRAILERS':
      return {
        ready: 'Error',
        list: action.payload,
      };
    default:
      return state;
  }
};

export default trailers;
