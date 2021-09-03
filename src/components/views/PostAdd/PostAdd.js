import React from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest, selectStatus } from '../../../redux/postsSlice';

import Editor from '../../features/Editor/Editor';
import Spinner from '../../common/Spinner/Spinner';

import styles from './PostAdd.module.scss';

const PostAdd = () => {
  const postData = { title: '', body: ''};
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);


  return (
    <div className={clsx(styles.root, 'container')}>
      {status === 'saving' && <Spinner/>}
      <Editor post={postData} save={data => dispatch(addRequest(data))} />
    </div>
  );
};

export default PostAdd;