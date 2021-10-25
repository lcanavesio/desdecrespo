import {gql, useQuery} from '@apollo/client';
import {CircularProgress, Grid} from '@material-ui/core';
import React from 'react';
import {useStylesGlobal} from '../../utils/GlobalStyle';
import NotFoundPage from '../../pages/404';
import FeaturedPost from './FeaturedPost';
import HeaderTitle from '../common/HeaderTitle';

const PolicialesProvinciales = () => {
  const classesGlobal = useStylesGlobal();
  const getPostsPoliciales = gql`
    query getPosts {
      posts(
        first: 8
        where: {
          orderby: { field: DATE, order: DESC }
          categoryName: "Policiales"
        }
      ) {
        edges {
          node {
            id
            date
            title
            slug
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `;

  const getPostsProvinciales = gql`
    query getPosts {
      posts(
        first: 8
        where: {
          orderby: { field: DATE, order: DESC }
          categoryName: "Provinciales"
        }
      ) {
        edges {
          node {
            id
            date
            title
            slug
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `;

  const {loading, error, data} = useQuery(getPostsPoliciales);
  const {
    loading: loadingProvinciales,
    error: errorProvinciales,
    data: dataProvinciales,
  } = useQuery(getPostsProvinciales);

  const postsPoliciales = data?.posts?.edges?.map((edge) => edge.node) || null;
  const postsProvinciales =
    dataProvinciales?.posts?.edges?.map((edge) => edge.node) || null;

  if (loading || loadingProvinciales) return <CircularProgress />;
  if (error || errorProvinciales) return <NotFoundPage />;
  if (!postsPoliciales || !postsProvinciales) return <div>Sin datos</div>;

  return (
    <>
      <Grid container className={classesGlobal.container} key="firstgrid">
        <Grid item lg={6} key="policiales">
          <HeaderTitle title="POLICIALES" />

          <Grid container>
            {postsPoliciales.map((post, index) => (
              <Grid item key={index} lg={6} className={classesGlobal.card}>
                <FeaturedPost key={index} post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={6} key="provinciales">
          <HeaderTitle title="PROVINCIALES" />
          <Grid container>
            {postsProvinciales.map((post, index) => (
              <Grid key={index} item lg={6} className={classesGlobal.card}>
                <FeaturedPost key={index} post={post} />
              </Grid>

            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PolicialesProvinciales;
