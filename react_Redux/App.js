import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Navbar from './src/Navbar';
import Shop from './src/Shop';
import { Provider } from 'react-redux';
import { store } from './src/state/store';




export default App = () => {

  return (

    <Provider store={store}>
      <Navbar />
      <Shop />
    </Provider>

  );
};



