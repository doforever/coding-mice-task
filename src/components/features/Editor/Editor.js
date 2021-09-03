import React, { useState } from 'react';
import clsx from 'clsx';

import Button from '../../common/Button/Button';

import styles from './Editor.module.scss';

const Editor = ({ className, post, save }) => {
  
  const [postData, setPostData]  = useState(post);

  const changeHandler = e => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const saveHandler = () => {
    save(postData);
  };
   
  return (
    <div className={clsx('row', styles.root, className)}>
      <div className={clsx('col-sm-12 col-md-8', styles.post)}>
        <form noValidate className={styles.form}>
          <label htmlFor='title'>Title</label>
          <input name='title' id='name' type='text' onChange={changeHandler} value={postData.title}></input>
          <label htmlFor='body'>Text</label>
          <textarea rows="8" cols="40" name='body' id='body' onChange={changeHandler} value={postData.body}></textarea>
        </form>
      </div>
      <div className={clsx('col-md-4', styles.actions)}>
        <Button onClick={saveHandler}>Save</Button>
      </div>
    </div>
  )
};

export default Editor;