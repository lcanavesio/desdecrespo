import {CssBaseline, Grid, makeStyles} from '@material-ui/core';
import React from 'react';
import ClicMe from '../../components/inmobiliaria/ClicMe';
import TabFourPosts from '../../components/post//TabFourPosts';
import NoSePierda from '../../components/post/NoSePierda';
import PolicialesProvinciales from '../../components/post/PolicialesProvinciales';
import PostGenerico from '../../components/post/PostGenerico';
import SlidePosts from '../../components/post/SlidePosts';
import SEO from '../../components/seo';
import Wather from '../../components/Wather';
import {PublicidadGenerico} from '../../utils/Publicidad';
import PostsRecientes from '../post/PostsRecientes';
import SocialFollow from '../social/SocialFollow';
import Layout from './Layout';

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
}));

const LayoutMobile = () => {
  const classes = useStyles();

  return (
    <Layout>
      <section className={classes.container}>
        <SEO title="Inicio" />
        <CssBaseline />
        <Grid container className={classes.container}>
          <Grid container lg={12}>
            <Grid item lg={12}>
              <SlidePosts />
            </Grid>
          </Grid>
          {/* <TV /> */}
          <PublicidadGenerico
            key="publicidad1"
            href={process.env.PUBLICIDAD1}
          />
          <PostGenerico
            key="postgenerico1"
            categoryName="locales"
            first={3}
            titulo="Locales"
          />
          <Wather />
          <PublicidadGenerico
            key="publicidad6"
            href={process.env.PUBLICIDAD6}
          />
          <TabFourPosts />

          <img src={process.env.PUBLICIDAD2} />
          {/* <PublicidadPrincipal key={'publicidadprincipal1'} /> */}
          <PostsRecientes />
          <ClicMe />
          <PostGenerico
            key="postgenerico3"
            categoryName="locales"
            first={6}
            titulo="Crespo"
          />
          <SocialFollow />
          <img src={process.env.PUBLICIDAD3} />
          <PolicialesProvinciales key="policialesprovinciales" />
          <img src={process.env.PUBLICIDAD4} />

          <PostGenerico
            key="postgenerico5"
            categoryName="Nacionales"
            first={3}
            titulo="NACIONALES"
          />
          <img src={process.env.PUBLICIDAD5} />
          <PostGenerico
            key="postgenerico6"
            categoryName="Internacionales"
            first={2}
            titulo="INTERNACIONALES"
          />

          <PostGenerico
            key="postgenerico7"
            categoryName="Deportes"
            first={3}
            titulo="DEPORTES"
          />

          <NoSePierda key="nosepierda" />
        </Grid>
      </section>
    </Layout>
  );
};

export default LayoutMobile;
