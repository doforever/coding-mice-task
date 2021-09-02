import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAll, selectAll, selectStatus } from '../../../redux/postsSlice';

import PostBox from '../../features/PostBox/PostBox';

import styles from './List.module.scss';

const List = () => {

  const dispatch = useDispatch();
  const posts = useSelector(selectAll);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>
  return (
    <div className={styles.root}>
      <div className="grid-sm-1 grid-md-2 grid-lg-3 grid-xl-4">
        {posts.map(post => <PostBox className={styles.post} {...post}/>)}
      </div>
    </div>
  );
};

export default List;