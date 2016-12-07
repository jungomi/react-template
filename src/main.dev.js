import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import './main.css';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
