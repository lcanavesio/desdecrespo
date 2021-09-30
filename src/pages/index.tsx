import {gql, useQuery} from '@apollo/client';
import {
  CircularProgress,
  CssBaseline,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import Publicidad1 from '../utils/Publicidad1';
import Layout from '../components/layout/Layout';
import FeaturedPost from '../components/post/FeaturedPost';
import SlidePosts from '../components/post/SlidePosts';
import Radio from '../components/radio/radio';
import SEO from '../components/seo';
import TV from '../components/tv/TV';
import NotFoundPage from './404';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
  },
}));

interface Props {
  data: {
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Index = (props: Props) => {
  const classes = useStyles();
  const getPosts = gql`
    query getPosts {
      posts(
        first: 10
        where: {
          orderby: { field: DATE, order: DESC }
          categoryName: "locales"
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
    <Layout location={window.location} title="Test">
      <section className={classes.container}>
        <SEO title="Inicio" />
        <CssBaseline />
        <Grid container className={classes.container}>
          <Grid lg={9}>
            <Grid container lg={12}>
              <Grid item lg={12}>
                <SlidePosts key={posts[0]?.title} posts={posts} />
              </Grid>
            </Grid>
            <Grid container lg={12}>
              <Grid item lg={4} className={classes.card}>
                <FeaturedPost key={posts[0]?.title} post={posts[0]} />
              </Grid>
              <Grid item lg={4} className={classes.card}>
                <FeaturedPost key={posts[1]?.title} post={posts[1]} />
              </Grid>
              <Grid item lg={4} className={classes.card}>
                <FeaturedPost key={posts[2]?.title} post={posts[2]} />
              </Grid>
            </Grid>
            <Grid container lg={12}>
              <Grid item lg={12} className={classes.card}>
                <img src='https://www.desdecrespo.com.ar/wp-content/uploads/2021/03/Banner-Vicegobernacion-para-medios-2-2048x215.png' />
              </Grid>
            </Grid>
            <Grid container lg={12}>
              <Grid item lg={4} className={classes.card}>
                <FeaturedPost key={posts[3]?.title} post={posts[3]} />
              </Grid>
              <Grid item lg={4} className={classes.card}>
                <FeaturedPost key={posts[4]?.title} post={posts[4]} />
              </Grid>
              <Grid item lg={4} className={classes.card}>
                <FeaturedPost key={posts[5]?.title} post={posts[5]} />
              </Grid>
            </Grid>
            <Publicidad1 />
          </Grid>
          <Grid lg={3}>
            <TV />
            <Radio />
          </Grid>
        </Grid>
      </section>
    </Layout>
  );
};

export default Index;
