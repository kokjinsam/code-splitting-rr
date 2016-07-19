import React, { Component, PropTypes } from 'react';
import {
  Router,
  Route,
} from 'react-router';
// import createRoutes from './routes';
// import LaunchPage from './components/LaunchPage';
// import AppPage from './components/AppPage';
import Structure from './components/Structure';

/* eslint-disable react/prefer-stateless-function */
class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  render() {
    const {
      history,
    } = this.props;

    return (
      <Router history={history}>
        <Route
          path="/"
          component={Structure}
        >
          <Route
            path="/launch"
            getComponents={(location, cb) => {
              require.ensure([], () => {
                cb(null, require('./components/LaunchPage').default);
              }, 'LaunchPage');
            }}
          />
          <Route
            path="/app"
            getComponents={(location, cb) => {
              require.ensure([], () => {
                cb(null, require('./components/AppPage').default);
              }, 'AppPage');
            }}
          />
        </Route>
      </Router>
    );
  }
}

export default Root;
