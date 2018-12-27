import Request from './requests';

const NOTIFICATION_DURATION = 3000;

export const fetchTrailers = (request = Request) => async (dispatch) => {
  dispatch({ type: 'LOAD_TRAILERS' });
  const response = await request.fetchTrailers();
  const { data: { records } } = response;
  dispatch({
    type: 'FETCH_TRAILERS',
    payload: records,
  });
};

export const fetchName = (request = Request) => async (dispatch) => {
  dispatch({ type: 'LOAD_NAME' });
  const response = await request.fetchTrailers();
  dispatch({
    type: 'FETCH_NAME',
    payload: response.data,
  });
};

export const fetchTitle = (request = Request) => async (dispatch) => {
  dispatch({ type: 'LOAD_TITLE' });
  const response = await request.fetchTrailers();
  dispatch({
    type: 'FETCH_TITLE',
    payload: response.data,
  });
};
