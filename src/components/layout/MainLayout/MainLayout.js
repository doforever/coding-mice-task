import React from 'react';

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

export default MainLayout;