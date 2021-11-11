import { gql, useQuery } from '@apollo/client';
import { useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import { Link, navigate } from 'gatsby';
import Image from 'material-ui-image';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import NotFoundPage from '../../pages/404';

const useStyles = makeStyles((theme) => ({
  'carousel': {
    marginLeft: 10,
    marginRight: 10,
  },
  'image': {
    position: 'relative',
    height: 100,
    minWidth: '100%',
    objectFit: 'cover',
    margin: 0,
    borderRadius: 5,
  },
  'postTitle': {
    color: 'white',
    padding: '3%',
    margin: 0,
    fontSize: 26,
    fontWeight: 600,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  'link': {
    color: 'white',
    textDecoration: 'none',
  },
  '@global': {
    '.MuiGrid-root.MuiGrid-item.MuiGrid-grid-lg-12': {
      width: '100%',
    },
    '#layerImage': {
      marginBottom: 30,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      content: '',
      position: 'absolute',
      display: 'flex',
      left: 0,
      bottom: 0,
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
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
          tag: "Destacadas, Destacados"
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
  const matches = useMediaQuery('(max-width:550px)');

  const { loading, error, data: dataPosts } = useQuery(getPosts);
  const posts = dataPosts?.posts?.edges?.map((edge) => edge.node) || null;
  if (error) return <NotFoundPage />;
  return (
    <>
      {(!loading && posts) ?
        <Carousel
          className={classes.carousel} animation={'slide'}>
          {posts.map((post, index) => (
            <div key={index}>
              <Link
                id="overlayBackground"
                onClick={() => navigate(`/post/${post.slug}`)}
                to={`/post/${post.slug}`}
                className={classes.link}>
                <Image
                  src={post.featuredImage?.node?.mediaItemUrl}
                  alt={post.title}
                  aspectRatio={2}
                  disableSpinner={false}
                  cover={true}
                  className={classes.image}
                />

              </Link>
              <div id="layerImage">
                <h3 className={classes.postTitle} style={{fontSize: matches ? 14 : 26}}>{post.title}</h3>
              </div>
            </div>
          ))}
        </Carousel> :
        <Skeleton variant="rect" style={{ minHeight: 450, width: '100%', margin: 10 }} />
      }

    </>
  );
};
export default SlidePosts;
