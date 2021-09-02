import React from 'react';

import styles from './MainLayout.module.scss';

const MainLayout = ({children}) => {
  return (
    <div className={styles.root}>
      MainLayout
      {children}
    </div>
  );
};

export default MainLayout;