import { makeStyles } from '@material-ui/core';
import React from 'react';
import useScript from '../utils/useScript';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
}));

const Wather = () => {
  const classes = useStyles();
  useScript('https://www.tutiempo.net/s-widget/l_FeJkkE11kAEFCBhAKAxDDDDzzUaATEj2bDujWVgfZEDkkEkE1');

  return (
    <>
      <div
        id="TT_FeJkkE11kAEFCBhAKAxDDDDzzUaATEj2bDujWVgfZEDkkEkE1"
        className={classes.container} />
    </>
  );
};
export default Wather;
