import React from 'react';

import {Link} from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        <Link to='/'>Bulletin</Link>
      </h1>
    </div>
  );
};

export default Header;