import React from 'react';
import clsx from 'clsx';

import {Link} from 'react-router-dom';

import styles from './PostBox.module.scss';

const PostBox = ({ title, body, className, id }) => {

  return (
    <div className={clsx(styles.root, className )}>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/post/${id}`}>View more</Link>
    </div>
)};

export default PostBox;