import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './FAB.module.scss';

const FAB = ({className, children, to}) => {
  return (
    <Link to={to} className={clsx(styles.root, className)}>
      {children}
    </Link>
  );
};

FAB.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string,
};

export default FAB;