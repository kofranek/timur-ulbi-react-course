import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
  console.log('MyInput props=',props)
  return (
    <input ref={ref} className={classes.myInput} {...props} />

  );
});

export default MyInput;
