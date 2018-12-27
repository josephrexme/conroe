/* eslint-disable */
export const getContentByReady = (ready, context) => {
  const readyStates = {
    initial: null,
    loading: context.loading(),
    loaded: context.loaded(),
    error: context.error(),
  };
  return readyStates[ready];
};
