import {CssBaseline, Grid, makeStyles} from '@material-ui/core';
import React, {useState} from 'react';
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
import HeaderMobile from './HeaderMobile';
import NavigatorMobile from './NavigatorMobile';

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
const drawerWidth = 200;

const LayoutMobile = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="layoutMobile">
      <NavigatorMobile
        PaperProps={{style: {width: drawerWidth}}}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      />
      <HeaderMobile onDrawerToggle={handleDrawerToggle}/>
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
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default LayoutMobile;
