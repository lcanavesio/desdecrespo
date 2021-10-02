import React from 'react';

// NOTE Posts
import SlidePosts from '../components/post/SlidePosts';
import NoSePierda from '../components/post/NoSePierda';
import PolicialesProvinciales from '../components/post/PolicialesProvinciales';
import PostGenerico from '../components/post/PostGenerico';

// NOTE Component
import Radio from '../components/radio/radio';
import SEO from '../components/seo';
import TV from '../components/tv/TV';
import Whater from '../components/Whater';
import ClicMe from '../components/inmobiliaria/ClicMe';

// NOTE Layout
import {useStylesGlobal} from '../utils/GlobalStyle';
import {CssBaseline, Grid} from '@mui/material';
import Layout from '../components/layout/Layout';
import {ThemeProvider} from '@mui/material/styles';
import {makeStyles} from '@mui/styles';
// NOTE Publicity
import {PublicidadGenerico, PublicidadPrincipal} from '../utils/Publicidad';

const theme = makeStyles({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

const Index = () => {
  const classesGlobal = useStylesGlobal();

  return (
    <ThemeProvider theme={theme}>
      <Layout location={window.location} title="DesdeCrespo" key="layout">
        <section className={classesGlobal.container}>
          <SEO title="Inicio" />
          <CssBaseline />
          <Grid container className={classesGlobal.container}>
            <Grid item lg={9}>
              <SlidePosts />
              <PostGenerico
                key="postgenerico1"
                categoryName="locales"
                first={3}
                titulo="LOCALES"
              />
              <PublicidadGenerico
                key="publicidad1"
                href={process.env.PUBLICIDAD1}
              />
              <PostGenerico
                key="postgenerico2"
                categoryName="Policiales"
                first={3}
                titulo="POLICIALES"
              />
              <PublicidadPrincipal key={'hofdashfoiasd'} />
              <PostGenerico
                key="postgenerico3"
                categoryName="locales"
                first={8}
                titulo="CRESPO"
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
            <Grid item lg={3}>
              <TV />
              <Whater />
              <Radio />
              <ClicMe />

            </Grid>
          </Grid>
        </section>
      </Layout>
    </ThemeProvider>
  );
};

export default Index;
