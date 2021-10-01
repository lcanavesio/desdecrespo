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


export const PublicidadPrincipal = () => {
  const classes = useStyles();
  return (
    <Grid container lg={12}>
      <Grid item lg={3} className={classes.card}>
        <img src={process.env.PUBLICIDAD2} />
      </Grid>
      <Grid item lg={3} className={classes.card}>
        <img src={process.env.PUBLICIDAD3} />
      </Grid>
      <Grid item lg={3} className={classes.card}>
        <img src={process.env.PUBLICIDAD4} />
      </Grid>
      <Grid item lg={3} className={classes.card}>
        <img src={process.env.PUBLICIDAD5} />
      </Grid>
    </Grid>
  );
};

type PublicidadGenerico = {href: string}

// eslint-disable-next-line no-unused-vars
export const PublicidadGenerico = (props: PublicidadGenerico) => {
  const {href} = props;
  const classes = useStyles();
  return (
    <Grid container lg={12}>
      <Grid item lg={12} className={classes.card}>
        <img src={href} />
      </Grid>
    </Grid>
  );
};
