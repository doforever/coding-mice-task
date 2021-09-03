import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectById, fetchAll, updateRequest, selectStatus } from '../../../redux/postsSlice';

import Editor from '../../features/Editor/Editor';
import Spinner from '../../common/Spinner/Spinner';

import styles from './PostEdit.module.scss';

const PostEdit = () => {
  const { id } = useParams();
  const postData = useSelector((state) => selectById(state, id));
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  
  useEffect(() => {
    if (!postData) {
      dispatch(fetchAll());
    }
  }, []);
  
  if (!postData) return <Spinner/>

  return (
    <div className={clsx(styles.root, 'container')}>
      {status === 'updating' && <Spinner/>}
      <Editor post={postData} save={data => dispatch(updateRequest(data))}/>
    </div>
  );
};

export default PostEdit;