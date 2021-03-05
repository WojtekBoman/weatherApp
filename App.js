import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './app/store/configureStore';
import Home from './app/containers/Home';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;

