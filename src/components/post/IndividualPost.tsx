import { gql, useQuery } from '@apollo/client';
import { CssBaseline, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import Image from 'material-ui-image';
import React from 'react';
import Breadcrumb from '../breadcrumb/breadcrumb';
import InfiniteScrollComponent from '../categoria/infiniteScroll';
import InfiniteScrollSimple from '../categoria/infiniteScrollSimple';
import HeaderTitle from '../common/headerTitle';
import SEO from '../seo/seo';
import PostsRecientes from './PostsRecientes';

const useStyles = makeStyles((theme) => ({
  'container': {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  'rightColumn': {
    padingLeft: 5,
  },
  'image': {
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
    objectFit: 'cover',
    margin: 0,
    borderRadius: 5,
    paddingBottom: 20,
    maxWidth: '100%',
  },
  '@global': {
    '#divContent img': {
      width: '100%',
      height: '100%',
    },
    '#divContent video': {
      width: '100%',
      height: '100%',
    },
    // eslint-disable-next-line max-len
    '.the_champ_sharing_container.the_champ_vertical_sharing.the_champ_hide_sharing.the_champ_bottom_sharing':
      {
        display: 'none',
      },
  },
}));

type Props = {
  slug: String
}

const IndividualPost = (props: Props) => {
  const {slug} = props;
  const postBy = gql`
    query postBy($slug: String!) {
      postBy(slug: $slug) {
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
          'https://desdecrespo.com.ar/',
      ) :
      '';

  const {loading, error, data} = useQuery(postBy, {
    variables: {slug},
  });
  const category = data?.postBy?.categories?.nodes[0]?.name;

  const classes = useStyles();
  if (error) return null;

  return (
    <section className={classes.container}>
      <SEO
        title={data?.postBy?.title}
        description={data?.postBy?.title}
        image={data?.postBy?.featuredImage?.node?.mediaItemUrl}
        article={data?.postBy?.content}
      />
      <CssBaseline />
      <Grid container className={classes.container}>
        {!matches ? (
          <>
            <Grid lg={9}>
              <Grid container>
                <Grid item lg={11} style={{maxWidth: '100%'}}>
                  <Breadcrumb category={category} label={''} />
                  {!loading && data?.postBy ? (
                    <>
                      <Typography
                        component="h1"
                        variant="h3"
                        color="inherit"
                        gutterBottom
                        style={{
                          fontSize: '40px',
                          color: '#1f1f1f',
                          lineHeight: '1',
                          display: 'block',
                          fontFamily: 'Libre Franklin,sans-serif',
                          fontWeight: 'bold',
                        }}
                      >
                        {data?.postBy?.title}
                      </Typography>
                      <Image
                        src={data?.postBy?.featuredImage?.node?.mediaItemUrl}
                        alt={data?.postBy?.title}
                        aspectRatio={2}
                        disableSpinner={false}
                        cover={true}
                        className={classes.image}
                      />
                      <div
                        id="divContent"
                        style={{
                          width: '100%',
                          fontSize: '18px',
                          fontWeight: 400,
                        }}
                        dangerouslySetInnerHTML={{
                          __html: data?.postBy?.content,
                        }}
                      />
                      <iframe
                        src={`https://www.facebook.com/plugins/comments.php?href=${locationHref}`}
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
                <HeaderTitle title="ÚLTIMAS NOTICIAS" />
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
                src="https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/Cabezal_Almanaque_SUSPENDIDO.jpg"
                className={classes.image}
              />
              <img
                src=" https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/fh.png"
                className={classes.image}
              />
              <img
                src="https://admin.desdecrespo.com.ar/wp-content/uploads/2021/06/Cont.-Visintin.png"
                className={classes.image}
              />
              <img
                src="https://admin.desdecrespo.com.ar/wp-content/uploads/2021/09/Screenshot_2021-09-18-11-50-08-1024x576.png"
                className={classes.image}
              />

              {process.env.PUBLICIDAD7 && (
                <a
                  href="http://galarza.gov.ar/licitaciones"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={process.env.PUBLICIDAD7} />
                </a>
              )}
              <HeaderTitle title="NO SE PIERDA" />
              <InfiniteScrollSimple
                categoryParams={
                  'Espectáculos, Sociales, Rurales,  Internacionales'
                }
              />
            </Grid>
          </>
        ) : (
          <Grid container>
            <Grid item lg={11} style={{maxWidth: '100%'}}>
              <Breadcrumb category={category} label={''} />
              {!loading && data?.postBy ? (
                <>
                  <Typography
                    component="h1"
                    variant="h2"
                    color="inherit"
                    gutterBottom
                    style={{
                      fontSize: '28px',
                      color: '#1f1f1f',
                      lineHeight: '1',
                      display: 'block',
                      fontFamily: 'Libre Franklin,sans-serif',
                      fontWeight: 'bold',
                    }}
                  >
                    {data?.postBy?.title}
                  </Typography>
                  <Image
                    src={data?.postBy?.featuredImage?.node?.mediaItemUrl}
                    alt={data?.postBy?.title}
                    aspectRatio={2}
                    disableSpinner={false}
                    cover={true}
                    className={classes.image}
                  />
                  <div
                    id="divContent"
                    style={{
                      width: '100%',
                      fontSize: '18px',
                      fontWeight: 400,
                    }}
                    dangerouslySetInnerHTML={{
                      __html: data?.postBy?.content,
                    }}
                  />
                  <iframe
                    src={`https://www.facebook.com/plugins/comments.php?href=${locationHref}`}
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
            <Grid item lg={11}>
              <img
                src=" https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/fh.png"
                className={classes.image}
              />
              <PostsRecientes />
              <HeaderTitle title="PUBLICITE AQUÍ" />
              <img src={process.env.PUBLICIDAD5} />
              <img src={process.env.PUBLICIDAD2} />
              <img src={process.env.PUBLICIDAD4} />
              <img
                src="https://admin.desdecrespo.com.ar/wp-content/uploads/2020/05/Cabezal_Almanaque_SUSPENDIDO.jpg"
                className={classes.image}
              />

              <img
                src="https://admin.desdecrespo.com.ar/wp-content/uploads/2021/06/Cont.-Visintin.png"
                className={classes.image}
              />
              <img
                src="https://admin.desdecrespo.com.ar/wp-content/uploads/2021/09/Screenshot_2021-09-18-11-50-08-1024x576.png"
                className={classes.image}
              />
              <a
                href="http://galarza.gov.ar/licitaciones"
                target="_blank"
                rel="noreferrer"
              >
                <img src={process.env.PUBLICIDAD7} />
              </a>
              <HeaderTitle title="NO SE PIERDA" />
              <InfiniteScrollSimple
                categoryParams={
                  'Espectáculos, Locales, Rurales, Nacionales, Internacionales'
                }
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </section>
  );
};
export default IndividualPost;
