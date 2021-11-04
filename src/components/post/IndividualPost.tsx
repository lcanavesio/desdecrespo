import {gql, useQuery} from '@apollo/client';
import {CssBaseline, Grid, Typography, useMediaQuery} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Skeleton} from '@material-ui/lab';
import Image from 'material-ui-image';
import React from 'react';
import NotFoundPage from '../../pages/404';
import Breadcrumb from '../breadcrumb/breadcrumb';
import InfiniteScrollComponent from '../categoria/InfiniteScroll';
import InfiniteScrollSimple from '../categoria/infiniteScrollSimple';
import HeaderTitle from '../common/headerTitle';
import SEO from '../seo';
import PostsRecientes from './PostsRecientes';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
  },
  rightColumn: {
    padingLeft: 5,
  },
  image: {
    position: 'relative',
    height: 100,
    minWidth: '100%',
    objectFit: 'cover',
    margin: 0,
    borderRadius: 5,
    paddingBottom: 20,
  },
  publicidadMobile: {
    textAlign: 'center',
    width: '80%',
  },
}));
type Props = {
  path: string
  location: string
}

const IndividualPost = (props: Props) => {
  const getPost = gql`
    query getPost($id: ID!) {
      post(id: $id) {
        content
        slug
        title
        uri
        date
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  `;
  const matches = useMediaQuery('(max-width:1279px)');

  // const query: any = queryString.parse(location.search);
  const locationHref: String =
    typeof window !== 'undefined' ?
      location.href.replace(
          'http://localhost:8000/',
          'https://www.desdecrespo.com.ar/',
      ) :
      '';
  const params: String[] =
    typeof window !== 'undefined' ? location.pathname.split('/') : '';
  const id: String = params[3];
  const {loading, error, data} = useQuery(getPost, {
    variables: {id},
  });
  const category = data?.post?.categories?.nodes[0]?.name;

  const classes = useStyles();
  if (error) return <NotFoundPage />;

  return (
    <section className={classes.container}>
      <SEO title="Inicio" />
      <CssBaseline />

      <Grid container className={classes.container}>
        {!matches ? (
          <>
            <Grid lg={9}>
              <Grid container>
                <Grid item lg={11}>
                  <Breadcrumb category={category} label={data?.post?.title} />
                  {!loading && data?.post ? (
                    <>
                      <Typography
                        component="h1"
                        variant="h3"
                        color="inherit"
                        gutterBottom
                      >
                        {data?.post?.title}
                      </Typography>
                      <Image
                        src={data?.post?.featuredImage?.node?.mediaItemUrl}
                        alt={data?.post?.title}
                        aspectRatio={1}
                        disableSpinner={false}
                        cover={true}
                        className={classes.image}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.post?.content,
                        }}
                      />
                      <iframe
                        src={`http://www.facebook.com/plugins/comments.php?href=${locationHref}`}
                        scrolling="no"
                        frameBorder="0"
                        style={{
                          border: 'none',
                          overflow: 'hidden',
                          width: '100%',
                          minHeight: 300,
                          height: '100%',
                        }}
                        // style="border:none; overflow:hidden; width:100%; height:3806px;"
                        // allowTransparency="true"
                      ></iframe>
                    </>
                  ) : (
                    <>
                      <Skeleton
                        variant="text"
                        animation="wave"
                        style={{
                          minWidth: 300,
                          minHeight: 170,
                          marginLeft: 10,
                          marginRight: 10,
                        }}
                      />
                      <Skeleton
                        variant="rect"
                        animation="wave"
                        style={{
                          minWidth: 300,
                          minHeight: 500,
                          marginLeft: 10,
                          marginRight: 10,
                        }}
                      />
                    </>
                  )}
                </Grid>
                <Grid item lg={11}>
                  <InfiniteScrollComponent
                    categoryParams={'Locales, Policiales, Nacionales'}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid lg={3} className={classes.rightColumn}>
              <PostsRecientes />
              <HeaderTitle title="PUBLICITE AQUÍ" />
              <img src={process.env.PUBLICIDAD5} />
              <img src={process.env.PUBLICIDAD2} />
              <img src={process.env.PUBLICIDAD4} />
              <img
                src="https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/Cabezal_Almanaque_SUSPENDIDO.jpg"
                className={classes.image}
              />
              <img
                src=" https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/fh.png"
                className={classes.image}
              />
              <img
                src="https://www.desdecrespo.com.ar/wp-content/uploads/2021/06/Cont.-Visintin.png"
                className={classes.image}
              />
              <img
                src="https://www.desdecrespo.com.ar/wp-content/uploads/2021/09/Screenshot_2021-09-18-11-50-08-1024x576.png"
                className={classes.image}
              />
              <InfiniteScrollSimple
                categoryParams={
                  'Espectáculos, Sociales, Rurales, Nacionales, Internacionales'
                }
              />
            </Grid>
          </>
        ) : (
          <Grid container>
            <Grid item lg={11}>
              <Breadcrumb category={category} label={data?.post?.title} />
              {!loading && data?.post ? (
                <>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    {data?.post?.title}
                  </Typography>
                  <Image
                    src={data?.post?.featuredImage?.node?.mediaItemUrl}
                    alt={data?.post?.title}
                    aspectRatio={2}
                    disableSpinner={false}
                    cover={true}
                    className={classes.image}
                  />
                  <div
                    dangerouslySetInnerHTML={{__html: data?.post?.content}}
                  />
                  <img
                    src=" https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/fh.png"
                    className={classes.publicidadMobile}
                  />
                  <img
                    src={process.env.PUBLICIDAD5}
                    className={classes.publicidadMobile}
                  />

                  <iframe
                    src={`http://www.facebook.com/plugins/comments.php?href=${locationHref}`}
                    scrolling="no"
                    frameBorder="0"
                    style={{
                      border: 'none',
                      overflow: 'hidden',
                      width: '100%',
                      minHeight: 300,
                      height: '100%',
                    }}
                  ></iframe>
                </>
              ) : (
                <>
                  <Skeleton
                    variant="text"
                    animation="wave"
                    style={{
                      minWidth: 300,
                      minHeight: 170,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  />
                  <Skeleton
                    variant="rect"
                    animation="wave"
                    style={{
                      minWidth: 300,
                      minHeight: 500,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                  />
                </>
              )}
            </Grid>
            <Grid item>
              <HeaderTitle title="PUBLICITE AQUÍ" />

              <img
                src={process.env.PUBLICIDAD2}
                className={classes.publicidadMobile}
              />
              <img
                src={process.env.PUBLICIDAD4}
                className={classes.publicidadMobile}
              />
              <img
                src="https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/Cabezal_Almanaque_SUSPENDIDO.jpg"
                className={classes.publicidadMobile}
              />

              <img
                src="https://www.desdecrespo.com.ar/wp-content/uploads/2021/06/Cont.-Visintin.png"
                className={classes.publicidadMobile}
              />
              <img
                src="https://www.desdecrespo.com.ar/wp-content/uploads/2021/09/Screenshot_2021-09-18-11-50-08-1024x576.png"
                className={classes.publicidadMobile}
              />
              <HeaderTitle title="NOTICIAS DE INTERÉS" />
              <InfiniteScrollComponent
                categoryParams={'Locales, Policiales, Nacionales'}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </section>
  );
};
export default IndividualPost;
