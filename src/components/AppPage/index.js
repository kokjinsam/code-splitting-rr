import React, { Component, PropTypes } from 'react';
import styles from './styles';
import useSheet from 'react-jss';

class AppPage extends Component {
  static propTypes = {
    sheet: PropTypes.any.isRequired,
  };

  render() {
    const {
      sheet,
    } = this.props;

    const { classes } = sheet;

    return (
      <div className={classes.app}>
        <h1>AppPage</h1>
      </div>
    );
  }
}

export default useSheet(AppPage, styles);
