import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

export const reduxStoreConfig = () => {
//const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];
  const middlewareEnhancer = applyMiddleware(ReduxThunk);
//  const storeEnhancers = [middlewareEnhancer];


const store = createStore(
  reducers,
  middlewareEnhancer,
);

return store;
};
