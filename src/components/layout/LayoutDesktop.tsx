import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ClicMe from '../../components/inmobiliaria/ClicMe';
import TabFourPosts from '../../components/post//TabFourPosts';
import NoSePierda from '../../components/post/NoSePierda';
import PolicialesProvinciales from '../../components/post/PolicialesProvinciales';
import PostGenerico from '../../components/post/PostGenerico';
import SlidePosts from '../../components/post/SlidePosts';
import SEO from '../../components/seo';
import TV from '../../components/tv/TV';
import Wather from '../../components/Wather';
import { PublicidadGenerico, PublicidadPrincipal } from '../../utils/Publicidad';
import PostsRecientes from '../post/PostsRecientes';
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
  image: {
    marginTop: 10,
    marginBottom: 10,
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
          </Grid>
          <Grid lg={3} className={classes.rightColumn}>
            <TV />
            <Wather />
            {/* <Radio /> */}
            <ClicMe />
            <img src=" https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/fh.png" className={classes.image}/>
            <SocialFlow />
            <PostsRecientes />
            <img src="https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/Cabezal_Almanaque_SUSPENDIDO.jpg" className={classes.image}/>
            <Grid item lg={12} style={{ marginLeft: -10, marginRight: -10 }}>
              <PostGenerico
                key="postgenerico8"
                categoryName="Rurales"
                first={1}
                titulo="Rurales"
              />
            </Grid>
            <img src="https://www.desdecrespo.com.ar/wp-content/uploads/2021/06/Cont.-Visintin.png" className={classes.image}/>
            <img src="https://www.desdecrespo.com.ar/wp-content/uploads/2021/09/Screenshot_2021-09-18-11-50-08-1024x576.png" className={classes.image}/>
          </Grid>

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
      </section>
    </Layout>
  );
};

export default LayoutDesktop;
