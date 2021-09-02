import React from 'react';

import List from '../../features/List/List';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.root}>
      <List />
    </div>
  );
};

export default Home;