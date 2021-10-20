import {CssBaseline, Grid, makeStyles} from '@material-ui/core';
import React from 'react';
import HeaderTitle from '../components/common/HeaderTitle';
import ClicMe from '../components/inmobiliaria/ClicMe';
import Layout from '../components/layout/Layout';
import TabFourPosts from '../components/post//TabFourPosts';
import NoSePierda from '../components/post/NoSePierda';
import PolicialesProvinciales from '../components/post/PolicialesProvinciales';
import PostGenerico from '../components/post/PostGenerico';
import SlidePosts from '../components/post/SlidePosts';
import Radio from '../components/radio/radio';
import SEO from '../components/seo';
import TV from '../components/tv/TV';
import Wather from '../components/Wather';
import {PublicidadGenerico, PublicidadPrincipal} from '../utils/Publicidad';

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

interface Props {
  data: {
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Index = (props: Props) => {
  const classes = useStyles();
  return (
    <Layout title="DesdeCrespo" key="layout">
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
            <HeaderTitle title="LOCALES" />
            <PostGenerico
              key="postgenerico1"
              categoryName="locales"
              first={3}
            />
            <PublicidadGenerico
              key="publicidad1"
              href={process.env.PUBLICIDAD1}
            />
            <Grid item lg={12}>
              <TabFourPosts />
            </Grid>
            <PublicidadPrincipal key={'publicidadprincipal1'} />
            <HeaderTitle title="CRESPO" />
            <PostGenerico
              key="postgenerico3"
              categoryName="locales"
              first={6}
            />
            <PublicidadGenerico
              key="publicidad6"
              href={process.env.PUBLICIDAD6}
            />
            <PolicialesProvinciales key="policialesprovinciales" />
            <HeaderTitle title="NACIONALES" />
            <PostGenerico
              key="postgenerico5"
              categoryName="Nacionales"
              first={3}
            />
            <HeaderTitle title="INTERNACIONALES" />

            <PostGenerico
              key="postgenerico6"
              categoryName="Internacionales"
              first={2}
            />
            <HeaderTitle title="DEPORTES" />

            <PostGenerico
              key="postgenerico7"
              categoryName="Deportes"
              first={3}
            />

            <NoSePierda key="nosepierda" />
          </Grid>
          <Grid lg={3} className={classes.rightColumn}>
            <TV />
            <Wather />
            <Radio />
            <ClicMe />
          </Grid>
        </Grid>
      </section>
    </Layout>
  );
};

export default Index;
