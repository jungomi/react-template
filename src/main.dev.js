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
    import('./App').then(({ default: NewApp }) => {
      ReactDOM.render(
        <AppContainer>
          <NewApp />
        </AppContainer>,
        document.getElementById('app')
      );
    });
  });
}
