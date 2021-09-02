import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectById, fetchOne, setCurrent } from '../../../redux/postsSlice';

import Editor from '../../features/Editor/Editor';

import styles from './PostEdit.module.scss';

const PostEdit = () => {
  const { id } = useParams();
  const postData = useSelector((state) => selectById(state, id));
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!postData) dispatch(fetchOne(id));
    else dispatch(setCurrent(postData));
  }, []);

  return (
    <div className={clsx(styles.root, 'container')}>
      <Editor />
    </div>
  );
};

export default PostEdit;