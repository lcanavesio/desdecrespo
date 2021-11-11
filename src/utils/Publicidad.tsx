import { Grid, makeStyles } from '@material-ui/core';
import Img from 'gatsby-image';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
  },
  advertisingContainer: {
    width: '100%',
    textAlign: 'center',
  },
}));


export const PublicidadPrincipal = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={4} className={classes.card}>
        <Img fixed={ {
          width: 310,
          height: 240,
          src: process.env.PUBLICIDAD2,
          srcSet: process.env.PUBLICIDAD2,

        }} loading={'lazy'}/>

      </Grid>
      <Grid item lg={4} className={classes.card}>
        <a
          href="https://api.whatsapp.com/send?phone=5493434808579"
          target="_blank"
          rel="noreferrer"
        >
          <Img fixed={ {
            width: 300,
            height: 268,
            src: process.env.PUBLICIDAD3,
            srcSet: process.env.PUBLICIDAD3,

          }} loading={'lazy'} />
        </a>
      </Grid>
      <Grid item lg={4} className={classes.card}>
        <img src={process.env.PUBLICIDAD4} />

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
    <Grid container>
      <Grid item lg={12} className={classes.card}>
        <img src={href} className={classes.advertisingContainer} />
      </Grid>
    </Grid>
  );
};
