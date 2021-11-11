import { gql, useQuery } from '@apollo/client';
import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Brightness1Icon from '@material-ui/icons/Brightness1';
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
  carouselMobile: {
    marginLeft: 10,
    marginRight: 10,
    width: '70%',
    height: 50,
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
  titleText: {
    'display': '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
  mobileItem: {
    display: 'flex',
    textAlign: 'center',
  },
  mobileTitle: {
    fontSize: '12px',
    marginLeft: 5,
    marginRight: 5,
    display: 'flex',
    paddingTop: 5,
  },
}));

const Ultimo = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:900px)');
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

  return (
    <>
      {matches ? (
        <Grid
          container
          direction="row"
          style={{ width: '90%', maxWidth: 1700 }}
          justify="center"
          alignItems="center"
        >
          <FlashOnIcon style={{ color: 'red' }} />
          <h5 style={{ paddingTop: 21 }}>LO ÚLTIMO</h5>
          {posts ? (
            <Carousel
              className={classes.carousel}
              indicators={false}
              navButtonsAlwaysVisible={true}
              animation={'slide'}
              interval={5000}
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
                <Link
                  key={index}
                  to={`/post/${post.slug}`}
                  className={classes.link}
                >
                  <span className={classes.titleText}>{post.title}</span>
                </Link>
              ))}
            </Carousel>
          ) : (
            <Skeleton variant="rect" className={classes.carousel} />
          )}
        </Grid>
      ) : (
        <div style={{ width: '100%', display: '-webkit-inline-box' }}>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            <FlashOnIcon style={{ color: 'red' }} />
            {posts ? (
              <Carousel
                className={classes.carouselMobile}
                indicators={false}
                navButtonsAlwaysVisible={false}
                animation={'slide'}
                interval={5000}
              >
                {posts.map((post, index) => (
                  <Link
                    key={index}
                    to={`/post/${post.slug}`}
                    className={classes.link}
                  >
                    <span className={classes.titleText}>{post.title}</span>
                  </Link>
                ))}
              </Carousel>
            ) : (
              <Skeleton variant="rect" className={classes.carousel} />
            )}
          </Grid>
          <div style={{ display: matches ? 'flex' : 'none', alignItems: 'center', justify: 'center' }}
          >
            <Button
              variant="contained"
              size="small"
              style={{ color: 'white', background: 'red' }}
            >
              <Typography component="p" variant="body2">
                <Brightness1Icon style={{
                  width: 8,
                  height: 8,
                }} /> vivo
              </Typography>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
export default Ultimo;
