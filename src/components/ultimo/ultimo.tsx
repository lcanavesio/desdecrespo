import { gql, useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { Skeleton } from '@material-ui/lab';
import { Link } from 'gatsby';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import NotFoundPage from '../../pages/404';

const useStyles = makeStyles((theme) => ({
  carousel: {
    marginLeft: 10,
    marginRight: 10,
    width: '80%',
    height: 30,
    textAlign: 'center',
    paddingTop: 5,
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
    color: 'black',
    textDecoration: 'none',
  },
}));

const Ultimo = () => {
  const classes = useStyles();

  const getPosts = gql`
    query getPosts {
      posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(getPosts);
  const posts = data?.posts?.edges?.map((edge) => edge.node) || null;

  if (error) return <NotFoundPage />;
  //if (!posts) return <div>Sin datos</div>;

  return (
    <Grid
      container
      direction="row"
      style={{ width: '90%', maxWidth: 1700 }}
      justifyContent="center"
      alignItems="center"
    >
      <FlashOnIcon style={{ color: 'red' }} />
      <h5 style={{ paddingTop: 21 }}>LO ÚLTIMO</h5>
      {(!loading && posts) ?
        <Carousel
          className={classes.carousel}
          indicators={false}
          navButtonsAlwaysVisible={true}
          animation={'slide'}
          navButtonsProps={{
            style: {
              height: 5,
              width: 5,
              marginTop: 7,
              textAlign: 'right',
            },
          }}
        >
          {posts.map((post, index) => (
            <Link key={index}
              to={`/post/${post.slug}/${post.id}`} className={classes.link}>
              {post.title}
            </Link>
          ))}
        </Carousel>
        :
        <Skeleton variant="rect" className={classes.carousel} />
      }
    </Grid>
  );
};
export default Ultimo;
