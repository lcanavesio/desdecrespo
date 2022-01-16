import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import Img from 'gatsby-image';
import React from 'react';
import ClicMe from '../../components/inmobiliaria/ClicMe';
import TabFourPosts from '../../components/post//TabFourPosts';
import NoSePierda from '../../components/post/NoSePierda';
import PolicialesProvinciales from '../../components/post/PolicialesProvinciales';
import PostGenerico from '../../components/post/PostGenerico';
import SlidePosts from '../../components/post/SlidePosts';
import SEO from '../../components/seo';
import Wather from '../../components/Wather';
import PostsRecientes from '../post/PostsRecientes';
import SocialFollow from '../social/SocialFollow';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
  },
  rightColumn: {
    padingLeft: 5,
  },
  advertisingContainer: {
    width: '100%',
    textAlign: 'center',
  },
}));

const LayoutMobile = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <SEO title="Layout - Mobile" />
      <CssBaseline />
      <Grid container className={classes.container}>
        <Grid container lg={12}>
          <Grid item lg={12}>
            <SlidePosts />
          </Grid>
        </Grid>
        {/* <TV /> */}
        <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>
          <img src={process.env.PUBLICIDAD1} />
        </div>
        <PostGenerico
          key="postgenerico1"
          categoryName="locales"
          first={3}
          titulo="Locales"
        />
        <Wather />
        <TabFourPosts />

        <img
          src={process.env.PUBLICIDAD2}
          className={classes.advertisingContainer}
        />

        <PostsRecientes />
        <ClicMe />
        <div className={classes.advertisingContainer}>
          <img src=" https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/fh.png" />
        </div>

        <PostGenerico
          key="postgenerico3"
          categoryName="locales"
          first={6}
          titulo="Crespo"
        />
        <SocialFollow />
        <div className={classes.advertisingContainer}>
          <a
            href="https://api.whatsapp.com/send?phone=5493434808579"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={process.env.PUBLICIDAD3}
              style={{ textAlign: 'center', width: '80%' }}
            />
          </a>
        </div>
        <PolicialesProvinciales key="policialesprovinciales" />

        <div className={classes.advertisingContainer}>
          <img src="https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/Cabezal_Almanaque_SUSPENDIDO.jpg" />
        </div>

        <PostGenerico
          key="postgenerico8"
          categoryName="Rurales"
          first={1}
          titulo="Rurales"
        />
        <div className={classes.advertisingContainer}>
          <img src={process.env.PUBLICIDAD5} />
        </div>

        <PostGenerico
          key="postgenerico5"
          categoryName="Nacionales"
          first={3}
          titulo="NACIONALES"
        />
        <img src="https://admin.desdecrespo.com.ar/wp-content/uploads/2021/09/Screenshot_2021-09-18-11-50-08-1024x576.png" className={classes.advertisingContainer} />

        <PostGenerico
          key="postgenerico6"
          categoryName="Internacionales"
          first={2}
          titulo="INTERNACIONALES"
        />
        <div className={classes.advertisingContainer}>
          <img src="https://admin.desdecrespo.com.ar/wp-content/uploads/2021/06/Cont.-Visintin.png" />
        </div>

        <PostGenerico
          key="postgenerico7"
          categoryName="Deportes"
          first={3}
          titulo="DEPORTES"
        />
        {process.env.PUBLICIDAD7 && <div className={classes.advertisingContainer}>
          <a
            href="http://galarza.gov.ar/licitaciones"
            target="_blank"
            rel="noreferrer"
          >
            <Img

              imgStyle={{ objectFit: 'fill' }}
              fixed={{
                width: 321,
                height: 266,
                src: process.env.PUBLICIDAD7,
                srcSet: process.env.PUBLICIDAD7,
              }}
              loading={'lazy'}
            />
          </a>

        </div>}
        <NoSePierda key="nosepierda" />
      </Grid>
    </section>
  );
};

export default LayoutMobile;
