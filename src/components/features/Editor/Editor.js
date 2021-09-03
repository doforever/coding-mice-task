import React, { useState } from 'react';
import clsx from 'clsx';

import Button from '../../common/Button/Button';

import styles from './Editor.module.scss';

const Editor = ({ className, post, save }) => {

  const [invalid, setInvalid] = useState([]);
  const [postData, setPostData]  = useState(post);

  const changeHandler = e => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const invalid = [];
    for (let [key, value] of Object.entries(postData)) {
      if (!value) {
        invalid.push(key);
      }
    }
    setInvalid(invalid);
    return invalid.length === 0;
  };
 
  const saveHandler = () => {
    const isValid = validate();
    if (isValid) {
      save(postData);
    }
  };
   
  return (
    <div className={clsx('row', styles.root, className)}>
      <div className={clsx('col-sm-12 col-md-8', styles.post)}>
        <form noValidate className={styles.form}>
          <label htmlFor='title'>Title *</label>
          <input 
            name='title' 
            id='name' 
            type='text' 
            onChange={changeHandler} 
            value={postData.title}
            className={invalid.includes('title') ? styles.error : undefined}
            required>
          </input>
          {invalid.includes('title') && <div className={styles.tip}>Title is required</div>}
          <label htmlFor='body'>Text *</label>
          <textarea 
            rows="8" 
            cols="40" 
            name='body' 
            id='body' 
            onChange={changeHandler} 
            value={postData.body}
            className={invalid.includes('body') ? styles.error : undefined}
            required>
          </textarea>
          {invalid.includes('body') && <div className={styles.tip}>Text is required</div>}
        </form>
      </div>
      <div className={clsx('col-md-4', styles.actions)}>
        <Button onClick={saveHandler}>Save</Button>
      </div>
    </div>
  )
};

export default Editor;