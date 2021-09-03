import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ className, children, onClick }) => {
  return (
    <button onClick={onClick} className={clsx(styles.root, className)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;