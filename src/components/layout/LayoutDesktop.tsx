import { CssBaseline, Grid, makeStyles } from '@material-ui/core'
import Img from 'gatsby-image'
import React from 'react'
import ClicMe from '../../components/inmobiliaria/ClicMe'
import TabFourPosts from '../../components/post//TabFourPosts'
import NoSePierda from '../../components/post/NoSePierda'
import PolicialesProvinciales from '../../components/post/PolicialesProvinciales'
import PostGenerico from '../../components/post/PostGenerico'
import SlidePosts from '../../components/post/SlidePosts'
import SEO from '../../components/seo'
import TV from '../../components/tv/TV'
import Wather from '../../components/Wather'
import { PublicidadGenerico, PublicidadPrincipal } from '../../utils/Publicidad'
import PostsRecientes from '../post/PostsRecientes'
import Radio from '../radio/radio'
import SocialFlow from '../social/SocialFollow'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
  },
  rightColumn: {
    padingLeft: 5,
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    margin: 10,
    minWidth: '100%',
  },
  advertisingContainer: {
    width: '100%',
    textAlign: 'center',
  },
}))

const LayoutDesktop = () => {
  const classes = useStyles()
  return (
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
        </Grid>
        <Grid lg={3} className={classes.rightColumn}>
          <TV />
          <Wather />
          <Radio />
          <ClicMe />
          <SocialFlow />

          <div className={classes.advertisingContainer}>
            <Img
              className={classes.image}
              fixed={{
                width: 320,
                height: 120,
                src: 'https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/fh.png',
                srcSet:
                  'https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/fh.png',
              }}
              loading={'lazy'}
            />
          </div>
          <PostsRecientes />

          <Grid item lg={12} style={{ marginLeft: -10, marginRight: -10 }}>
            <Img
              className={classes.image}
              fixed={{
                width: 321,
                height: 200,
                src: process.env.PUBLICIDAD5,
                srcSet: process.env.PUBLICIDAD5,
              }}
              loading={'lazy'}
            />
          </Grid>

          <Grid item lg={12} style={{ marginLeft: -10, marginRight: -10 }}>
            <PostGenerico
              key="postgenerico8"
              categoryName="Rurales"
              first={1}
              titulo="Rurales"
            />
          </Grid>
          <Grid item lg={12} style={{ marginLeft: -10, marginRight: -10 }}>
            <Img
              className={classes.image}
              imgStyle={{ objectFit: 'fill' }}
              fixed={{
                width: 321,
                height: 200,
                src: 'https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/Cabezal_Almanaque_SUSPENDIDO.jpg',
                srcSet:
                  'https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/Cabezal_Almanaque_SUSPENDIDO.jpg',
              }}
              loading={'lazy'}
            />

            <Img
              className={classes.image}
              imgStyle={{ objectFit: 'fill' }}
              fixed={{
                width: 321,
                height: 200,
                src: 'https://admin.desdecrespo.com.ar/wp-content/uploads/2021/06/Cont.-Visintin.png',
                srcSet:
                  'https://admin.desdecrespo.com.ar/wp-content/uploads/2021/06/Cont.-Visintin.png',
              }}
              loading={'lazy'}
            />

            <Img
              className={classes.image}
              imgStyle={{ objectFit: 'fill' }}
              fixed={{
                width: 321,
                height: 200,
                src: 'https://admin.desdecrespo.com.ar/wp-content/uploads/2021/09/Screenshot_2021-09-18-11-50-08-1024x576.png',
                srcSet:
                  'https://admin.desdecrespo.com.ar/wp-content/uploads/2021/09/Screenshot_2021-09-18-11-50-08-1024x576.png',
              }}
              loading={'lazy'}
            />
            <a
              href="http://galarza.gov.ar/licitaciones"
              target="_blank"
              rel="noreferrer"
            >
              <Img
                className={classes.image}
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
          </Grid>
        </Grid>
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
          first={3}
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
  )
}

export default LayoutDesktop
