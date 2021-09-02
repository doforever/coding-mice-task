import React from 'react';
import clsx from 'clsx';

import styles from './PostBox.module.scss';

const PostBox = ({ title, body, className }) => (
  <div className={clsx(styles.root, className)}>
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
);

export default PostBox;