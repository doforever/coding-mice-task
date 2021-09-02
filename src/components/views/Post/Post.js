import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectById, fetchAll } from '../../../redux/postsSlice';

import {Link} from 'react-router-dom';
import Button from '../../common/Button/Button';

import styles from './Post.module.scss';

const Post = () => {
  const {id} = useParams();
  const postData = useSelector(state => selectById(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!postData) { 
      dispatch(fetchAll());
    }
  }, [postData, id, dispatch]);
  
  if (!postData) return 'Loading...';

  return (
    <div className={clsx(styles.root, 'container')}>
      <div className={styles.post}>
        <h1>{postData.title}</h1>
        <p>{postData.body}</p>
        <ul className={styles.actions}>
          <li><Link to={`/post/${id}/edit`}><Button>Edit</Button></Link></li>
          <li><Button>Delete</Button></li>
        </ul>
      </div>  
    </div>
  );
};

export default Post;