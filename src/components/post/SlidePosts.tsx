import {gql, useQuery} from '@apollo/client';
import {makeStyles} from '@material-ui/core/styles';
import {Skeleton} from '@material-ui/lab';
import {Link, navigate} from 'gatsby';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import NotFoundPage from '../../pages/404';
import Img from 'gatsby-image';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  carousel: {
    marginLeft: 10,
    marginRight: 10,
    minHeight: 472,
  },
  image: {
    position: 'relative',
    height: 436,
    width: '100%',
    objectFit: 'cover',
    margin: 0,
    borderRadius: 5,
  },
  postTitle: {
    position: 'absolute',
    top: '80%',
    left: '5%',
    fontSize: 26,
    fontWeight: 600,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}));

const SlidePosts = () => {
  const classes = useStyles();
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
  const matches = useMediaQuery('(min-width:900px)');
  if (error) return <NotFoundPage />;
  return (
    <>
      {(!loading && posts) ?
        <Carousel className={classes.carousel} animation={'slide'}>
          {posts.map((post, index) => (
            <div key={index}>
              <Link
                onClick={() => navigate(`/post/${post.slug}/${post.id}`)}
                to={`/post/${post.slug}/${post.id}`}
                className={classes.link}>
                <Img
                  fixed={{
                    width: matches ? 924 : 375,
                    height: matches ? 420 : 470,
                    src: post.featuredImage?.node?.mediaItemUrl,
                    srcSet: post.featuredImage?.node?.mediaItemUrl,
                  }}
                  alt={post.title}
                  loading={'lazy'}
                  className={classes.image}

                />
                <h3 className={classes.postTitle}>{post.title}</h3>
              </Link>
            </div>
          ))}
        </Carousel> :
        <Skeleton variant="rect" className={classes.carousel} />
      }

    </>
  );
};
export default SlidePosts;
