import {gql, useQuery} from '@apollo/client';
import {CircularProgress, Grid} from '@material-ui/core';
import React from 'react';
import {useStylesGlobal} from '../../utils/GlobalStyle';
import NotFoundPage from '../../pages/404';
import FeaturedPost from './FeaturedPost';

const Internacionales = () => {
  const classesGlobal = useStylesGlobal();

  const getPosts = gql`
    query getPosts {
      posts(
        first: 2
        where: {
          orderby: { field: DATE, order: DESC }
          categoryName: "Internacionales"
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

  const {loading, error, data} = useQuery(getPosts);
  const posts = data?.posts?.edges?.map((edge) => edge.node) || null;

  if (error) return <NotFoundPage />;
  if (!posts) return <div>Sin datos</div>;
  if (loading) return <CircularProgress />;
  return (
    <>
      <Grid container className={classesGlobal.container}>
        <div>
          <h2 className={classesGlobal.titulo}>
            <span className={classesGlobal.tituloSpan}>INTERNACIONALES </span>
          </h2>
        </div>
        <Grid container lg={12}>
          {posts.map((post, index) => (
            <>
              <Grid item lg={6} className={classesGlobal.card}>
                <FeaturedPost key={index} post={post} />
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Internacionales;
