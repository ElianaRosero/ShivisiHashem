import React , { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';

import App from './App.js'

class ProviderDude extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default ProviderDude;
