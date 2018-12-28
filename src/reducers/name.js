const initialState = {
  ready: 'initial',
  field: {}
};

const name = (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_NAME':
      return { ready: 'loading', field: {} };
    case 'FETCH_NAME':
      return { ready: 'loaded', field: action.payload };
    case 'ERROR_NAME':
      return { ready: 'error', field: {} };
    default:
      return state;
  }
};

export default name;
