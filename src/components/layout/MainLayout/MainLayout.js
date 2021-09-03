import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => {
  return (
    <div className={styles.root}>
      <Header/>
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;