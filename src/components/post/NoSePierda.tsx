/* eslint-disable max-len */
import { gql, useQuery } from '@apollo/client';
import { CircularProgress, Grid, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { useStylesGlobal } from '../../utils/GlobalStyle';
import HeaderTitle from '../common/headerTitle';
import FeaturedPost from './FeaturedPost';

const NoSePierda = () => {
  const classesGlobal = useStylesGlobal();
  const matches = useMediaQuery('(max-width:1279px)');
  const getPostsVarios = gql`
    query getPosts {
      posts(
        first: 2
        where: {
          orderby: { field: DATE, order: DESC }
          categoryName: "Sociales, Cumpleaños, Espectáculos, Cocina, Business, Life, Politics"
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

  const getPostsEducacion = gql`
    query getPosts {
      posts(
        first: 4
        where: {
          orderby: { field: DATE, order: DESC }
          categoryName: "Educación"
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

  const {loading, error, data} = useQuery(getPostsVarios);
  const {
    loading: loadingEducacion,
    error: errorEducacion,
    data: dataEducacion,
  } = useQuery(getPostsEducacion);

  const postsVarios = data?.posts?.edges?.map((edge) => edge.node) || null;
  const postsEducacion =
    dataEducacion?.posts?.edges?.map((edge) => edge.node) || null;

  if (error || errorEducacion) return null;
  if (!postsVarios || !postsEducacion) return null;
  if (loading || loadingEducacion) return <CircularProgress />;
  return (
    <>
      <HeaderTitle title="NO SE PIERDA" />
      <Grid container className={classesGlobal.container}>
        <Grid item lg={6}>
          <Grid container >
            {postsVarios.map((post, index) => (
              <Grid key={index} item lg={12} className={classesGlobal.card} style={{minWidth: '100%'}}>
                <FeaturedPost key={index} post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Grid container >
            {postsEducacion.map((post, index) => (
              <Grid item key={index} lg={6} className={classesGlobal.card} style={{minWidth: matches ? '100%' : 'auto'}}>
                <FeaturedPost key={index} post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default NoSePierda;
