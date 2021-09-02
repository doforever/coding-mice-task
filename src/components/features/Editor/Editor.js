import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectCurrent } from '../../../redux/postsSlice';

import Button from '../../common/Button/Button';

import styles from './Editor.module.scss';

const Editor = ({className}) => {
  const data = useSelector(selectCurrent);

  if(!data) return 'Loading...'

  return (
    <div className={clsx('row', styles.root, className)}>
      <div className={clsx('col-sm-12 col-md-8', styles.post)}>
        <form noValidate className={styles.form}>
          <label htmlFor='title'>Title</label>
          <input name='title' id='name' type='text' value={data.title}></input>
          <label htmlFor='body'>Text</label>
          <textarea rows="8" cols="40" name='body' id='body' value={data.body}></textarea>
        </form>
      </div>
      <div className={clsx('col-md-4', styles.actions)}>
        <Button>Save</Button>
      </div>
    </div>
  )
};

export default Editor;