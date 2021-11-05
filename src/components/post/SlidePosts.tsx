import {gql, useQuery} from '@apollo/client';
import {useMediaQuery} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Skeleton} from '@material-ui/lab';
import {Link, navigate} from 'gatsby';
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
    'position': 'absolute',
    'left': '4%',
    'fontSize': 26,
    'background': 'rgba(0,0,0,.6)',
    'borderRadius': 4,
    'bottom': 40,
    'color': 'white',
    'display': 'flex',
    'fontWeight': 600,
    'margin': 0,
    'padding': '10px 15px',
    'zIndex': 1,
    '&:hover': {
      background: 'black',
    },
  },
  'postTitleMobile': {
    'paddingTop': 10,
    'paddingBottom': 10,
    'fontSize': 22,
    'background': 'rgba(0,0,0,.6)',
    'borderRadius': 4,
    'color': 'white',
    'display': 'flex',
    'fontWeight': 'bold',
    'margin': 0,
    '&:hover': {
      background: 'black',
    },

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
        first: 6
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
  const matches = useMediaQuery('(max-width:1279px)');

  const {loading, error, data: dataPosts} = useQuery(getPosts);
  const posts = dataPosts?.posts?.edges?.map((edge) => edge.node) || null;
  if (error) return <NotFoundPage />;
  return (
    <>
      {!loading && posts ? (
        <>
          <Carousel className={classes.carousel} animation={'slide'}>
            {posts.map((post, index) => (
              <div key={index}>
                <Link
                  onClick={() => navigate(`/post/${post.slug}/${post.id}`)}
                  to={`/post/${post.slug}/${post.id}`}
                  className={classes.link}
                >
                  <Image
                    src={post.featuredImage?.node?.mediaItemUrl}
                    alt={post.title}
                    aspectRatio={2}
                    disableSpinner={false}
                    cover={true}
                    className={classes.image}
                  />
                  {!matches ? (
                    <h3 className={classes.postTitle}>{post.title}</h3> ):
                    (<h3 className={classes.postTitleMobile}>{post.title}</h3>)
                  }
                </Link>
              </div>
            ))}
          </Carousel>
        </>
      ) : (
        <Skeleton
          variant="rect"
          style={{minHeight: 450, width: '70%', paddingTop: 10}}
        />
      )}
    </>
  );
};
export default SlidePosts;
