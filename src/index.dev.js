import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './main.css';

async function init() {
  const { default: App } = await import('./App');
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  );
}

if (module.hot) {
  module.hot.accept('./App', init);
}

init();
