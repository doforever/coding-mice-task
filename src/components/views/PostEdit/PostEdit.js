import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectById, selectCurrent, fetchOne, setCurrent } from '../../../redux/postsSlice';

import Editor from '../../features/Editor/Editor';

import styles from './PostEdit.module.scss';

const PostEdit = () => {
  const { id } = useParams();
  const postToEdit = useSelector((state) => selectById(state, id));
  const editedData = useSelector(selectCurrent);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!postToEdit) dispatch(fetchOne(id));
    else dispatch(setCurrent(postToEdit));
  }, []);
  
  if (Object.keys(editedData).length === 0) return 'Loading...'

  return (
    <div className={clsx(styles.root, 'container')}>
      <Editor post={editedData}/>
    </div>
  );
};

export default PostEdit;