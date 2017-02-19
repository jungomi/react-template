import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './main.css';

function init() {
  import('./App').then(({ default: App }) => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

if (module.hot) {
  module.hot.accept('./App', init);
}

init();
