import { gql, useQuery } from '@apollo/client';
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
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    fontSize: 26,
    fontWeight: 600,
  },
  'link': {
    color: 'white',
    textDecoration: 'none',
  },
  '@global': {
    '.MuiGrid-root.MuiGrid-item.MuiGrid-grid-lg-12': {
      width: '100%',
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

  const {loading, error, data: dataPosts} = useQuery(getPosts);
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
                onClick={() => navigate(`/post/${post.slug}/${post.id}`)}
                to={`/post/${post.slug}/${post.id}`}
                className={classes.link}>
                <Image
                  src={post.featuredImage?.node?.mediaItemUrl}
                  alt={post.title}
                  aspectRatio={2}
                  disableSpinner={false}
                  cover={true}
                  className={classes.image}
                />
                <h3 className={classes.postTitle}>{post.title}</h3>
              </Link>
            </div>
          ))}
        </Carousel> :
        <Skeleton variant="rect" style={{minHeight: 450, width: '70%', paddingTop: 10}} />
      }

    </>
  );
};
export default SlidePosts;
