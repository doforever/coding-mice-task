import React from 'react';

import PostBox from '../../features/PostBox/PostBox';
import FAB from '../../common/FAB/FAB';

import styles from './List.module.scss';

const List = ({posts}) => {


  return (
    <div className={styles.root}>
      <div className="grid-sm-1 grid-md-2 grid-lg-3 grid-xl-4">
        {posts.map(post => <PostBox key={post.id} className={styles.post} {...post}/>)}
      </div>
      <FAB to='/post/add'>+</FAB>
    </div>
  );
};

export default List;