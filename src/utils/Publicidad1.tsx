import {Grid, makeStyles} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
  },
}));

const Publicidad1 = () => {
  const classes = useStyles();
  return (
    <Grid container lg={12}>
      <Grid item lg={3} className={classes.card}>
        <img src="https://www.desdecrespo.com.ar/wp-content/uploads/2020/09/Diputados-1-300x171.jpg" />
      </Grid>
      <Grid item lg={3} className={classes.card}>
        <img src="https://www.desdecrespo.com.ar/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-04-06-at-11.17.51-p5yx1h79vwceakonuwi3pgzbqvdpkbb9pps0o96lok.jpeg" />
      </Grid>
      <Grid item lg={3} className={classes.card}>
        <img src="https://www.desdecrespo.com.ar/wp-content/uploads/2021/07/300x200.gif" />
      </Grid>
      <Grid item lg={3} className={classes.card}>
        <img src="https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/GRUPOMOTTA.gif" />
      </Grid>
    </Grid>
  );
};

export default Publicidad1;
