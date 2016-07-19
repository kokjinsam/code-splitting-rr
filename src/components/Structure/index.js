import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Structure extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        <h1>Structure</h1>
        <Link to="/launch">Launch</Link>
        <Link to="/app">App</Link>
        {children ? children : <span>no children</span>}
      </div>
    );
  }
}

export default Structure;
