import {gql, useQuery} from '@apollo/client';
import {Link, navigate} from 'gatsby';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {useStylesGlobal} from '../../utils/GlobalStyle';
import NotFoundPage from '../../pages/404';
import {CircularProgress, Grid} from '@material-ui/core';

const SlidePosts = () => {
  const classesGlobal = useStylesGlobal();
  const getPosts = gql`
    query getPosts {
      posts(
        first: 8
        where: {
          orderby: { field: DATE, order: DESC }
          categoryName: "Destacadas, Destacados"
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

  if (loading) return <CircularProgress />;
  if (error) return <NotFoundPage />;
  if (!posts) return <div>Sin datos</div>;

  return (
    <>
      <Grid container className={classesGlobal.container}>
        <Grid item lg={12}>
          <Carousel className={classesGlobal.carousel} animation={'slide'}>
            {posts.map((post, index) => (
              <div key={index}>
                <Link
                  to={`/post/${post.slug}/${post.id}`}
                  className={classesGlobal.link}
                >
                  <img
                    src={post.featuredImage?.node?.mediaItemUrl}
                    className={classesGlobal.image}
                    onClick={() => navigate(`/post/${post.slug}/${post.id}`)}
                  />
                  <h3 className={classesGlobal.postTitle}>{post.title}</h3>
                </Link>
              </div>
            ))}
          </Carousel>
        </Grid>

      </Grid>
    </>
  );
};
export default SlidePosts;
