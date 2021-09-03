import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAll, selectStatus, fetchAll } from '../../../redux/postsSlice';

import List from '../../features/List/List';

import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAll);
  const status = useSelector(selectStatus);

  useEffect(() => {
    if (Object.keys(posts).length === 0) dispatch(fetchAll());
  }, []);

  if (status === 'loading') return <div>Loading...</div>

  return (
    <div className={styles.root}>
      <List posts={posts}/>
    </div>
  );
};

export default Home;