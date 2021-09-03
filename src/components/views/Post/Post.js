import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectById, fetchAll, removeRequest } from '../../../redux/postsSlice';

import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

import styles from './Post.module.scss';

const Post = () => {
  const { id } = useParams();
  const postData = useSelector(state => selectById(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!postData) {
      dispatch(fetchAll());
    }
  }, [postData, id, dispatch]);

  const deleteHander = () => dispatch(removeRequest(id));

  if (!postData) return 'Loading...';

  return (
    <div className={clsx(styles.root, 'container row')}>
      <div className={clsx('col-sm-12 col-md-8', styles.post)}>
        <h1>{postData.title}</h1>
        <p>{postData.body}</p>
      </div>
      <ul className={clsx('col-md-4', styles.actions)}>
        <li><Link to={`/post/${id}/edit`}><Button>Edit</Button></Link></li>
        <li><Button onClick={deleteHander}>Delete</Button></li>
      </ul>
    </div>
  );
};

export default Post;