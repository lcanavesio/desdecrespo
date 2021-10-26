import {CssBaseline, Grid, makeStyles} from '@material-ui/core';
import React from 'react';
import ClicMe from '../../components/inmobiliaria/ClicMe';
import TabFourPosts from '../../components/post//TabFourPosts';
import NoSePierda from '../../components/post/NoSePierda';
import PolicialesProvinciales
  from '../../components/post/PolicialesProvinciales';
import PostGenerico from '../../components/post/PostGenerico';
import SlidePosts from '../../components/post/SlidePosts';
import SEO from '../../components/seo';
import TV from '../../components/tv/TV';
import Wather from '../../components/Wather';
import {PublicidadGenerico, PublicidadPrincipal} from '../../utils/Publicidad';
import SocialFlow from '../social/SocialFollow';
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
  content: {
    maxWidth: 1287,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const LayoutDesktop = () => {
  const classes = useStyles();
  return (
    <Layout>
      <section className={classes.container}>
        <SEO title="Inicio" />
        <CssBaseline />
        <Grid container className={classes.container}>
          <Grid lg={9}>
            <Grid container lg={12}>
              <Grid item lg={12}>
                <SlidePosts />
              </Grid>
            </Grid>

            <PostGenerico
              key="postgenerico1"
              categoryName="locales"
              first={3}
              titulo="Locales"
            />

            <PublicidadGenerico
              key="publicidad1"
              href={process.env.PUBLICIDAD1}
            />

            <TabFourPosts />
            <PublicidadPrincipal key={'publicidadprincipal1'} />
            <PostGenerico
              key="postgenerico3"
              categoryName="locales"
              first={6}
              titulo="Crespo"
            />
            <PublicidadGenerico
              key="publicidad6"
              href={process.env.PUBLICIDAD6}
            />
            <PolicialesProvinciales key="policialesprovinciales" />
            <PostGenerico
              key="postgenerico5"
              categoryName="Nacionales"
              first={3}
              titulo="NACIONALES"
            />

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
          <Grid lg={3} className={classes.rightColumn}>
            <TV />
            <Wather />
            {/* <Radio /> */}
            <ClicMe />
            <img src=" https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/fh.png" />
            <SocialFlow />
          </Grid>
        </Grid>
      </section>
    </Layout>
  );
};

export default LayoutDesktop;
