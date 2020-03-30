import { applyMiddleware, createStore, compose } from 'redux';

export default (reducers, middlewares) => {
  const enhancer = __DEV__
      ? compose(
          console.tron.createEnhancer(), // integration of redux and reactotron
          applyMiddleware(...middlewares)
        )
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
