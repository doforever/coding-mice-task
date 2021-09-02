import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

const Button = ({ className, children }) => {
  return (
    <button className={clsx(styles.root, className)}>
      {children}
    </button>
  );
};

export default Button;