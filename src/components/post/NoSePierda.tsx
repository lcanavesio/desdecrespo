/* eslint-disable max-len */
import {gql, useQuery} from '@apollo/client';
import {CircularProgress, Grid} from '@material-ui/core';
import React from 'react';
import {useStylesGlobal} from '../../utils/GlobalStyle';
import NotFoundPage from '../../pages/404';
import FeaturedPost from './FeaturedPost';

const NoSePierda = () => {
  const classesGlobal = useStylesGlobal();
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

  if (error || errorEducacion) return <NotFoundPage />;
  if (!postsVarios || !postsEducacion) return <div>Sin datos</div>;
  if (loading || loadingEducacion) return <CircularProgress />;
  return (
    <>
      <div>
        <h2 className={classesGlobal.titulo}>
          <span className={classesGlobal.tituloSpan}>NO SE PIERDA </span>
        </h2>
      </div>
      <Grid container className={classesGlobal.container}>
        <Grid lg={6}>
          <Grid container lg={12}>
            {postsVarios.map((post, index) => (
              <>
                <Grid item lg={12} className={classesGlobal.card}>
                  <FeaturedPost key={index} post={post} />
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
        <Grid lg={6}>
          <Grid container lg={12}>
            {postsEducacion.map((post, index) => (
              <>
                <Grid item lg={6} className={classesGlobal.card}>
                  <FeaturedPost key={index} post={post} />
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default NoSePierda;
