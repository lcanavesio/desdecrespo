import { makeStyles } from '@material-ui/core';
import React from 'react';
import useScript from '../utils/useScript';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: 10,
    marginBottom: 10,
    width: 325,
    height: 100,
  },
  container: {
    minWidth: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
}));

const Wather = () => {
  const classes = useStyles();
  useScript('https://www.tutiempo.net/s-widget/l_FeJkkE11kAEFCBhAKAxDDDDzzUaATEj2bDujWVgfZEDkkEkE1');

  return (
    <div className={classes.container}>
      <div
        id="TT_FeJkkE11kAEFCBhAKAxDDDDzzUaATEj2bDujWVgfZEDkkEkE1"
        className={classes.content} />
    </div>
  );
};
export default Wather;
