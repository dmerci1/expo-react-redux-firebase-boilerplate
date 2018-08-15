import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { reduxStoreConfig } from './reduxStoreConfig';
import reducers from './src/reducers';
import App from './src/App';

class index extends Component {
render() {
   const store = reduxStoreConfig();
  return (
    <Provider store={store}>
       <App />
    </Provider>
  );
}
}

AppRegistry.registerComponent('index', () => index);

export default index;
