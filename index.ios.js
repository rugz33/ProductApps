import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './app/store/ConfigureStore'
import App from './app/views/App'

const store = configureStore();

const ProductApps = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

console.disableYellowBox = true;
AppRegistry.registerComponent('ProductApps', () => ProductApps);
