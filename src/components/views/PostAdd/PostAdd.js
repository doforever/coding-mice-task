import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addRequest } from '../../../redux/postsSlice';

import Editor from '../../features/Editor/Editor';

import styles from './PostAdd.module.scss';

const PostAdd = () => {
  const postData = { title: '', body: ''};
  const dispatch = useDispatch();

  return (
    <div className={clsx(styles.root, 'container')}>
      <Editor post={postData} save={data => dispatch(addRequest(data))} />
    </div>
  );
};

export default PostAdd;