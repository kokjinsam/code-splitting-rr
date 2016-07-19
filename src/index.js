import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import configureJSS from './configs/jss';
import { browserHistory } from 'react-router';
import Root from './Root';

// ---- JSS Configuration
configureJSS();

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <Root history={browserHistory} />
  </AppContainer>,
  MOUNT_NODE
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default;

    ReactDOM.render(
      <AppContainer>
        <NextRoot history={browserHistory} />
      </AppContainer>,
      MOUNT_NODE
    );
  });
}
