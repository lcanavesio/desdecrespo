import { gql, useQuery } from '@apollo/client';
import { CssBaseline, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import HeaderTitle from '../components/common/HeaderTitle';
import ClicMe from '../components/inmobiliaria/ClicMe';
import Layout from '../components/layout/Layout';
import TabFourPosts from '../components/post//TabFourPosts';
import FeaturedPost from '../components/post/FeaturedPost';
import SlidePosts from '../components/post/SlidePosts';
import Radio from '../components/radio/radio';
import SEO from '../components/seo';
import TV from '../components/tv/TV';
import Wather from '../components/Wather';


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
  },
  rightColumn: {
    padingLeft: 5,
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

  const getPostsByCategory = gql`
query getPostsByCategory ($categoryName:String!) {
  posts(
    first: 4
    where: {
      orderby: { field: DATE, order: DESC }
      categoryName: $categoryName
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
  const {data: localData} = useQuery(getPostsByCategory, {
    variables: {categoryName: 'Locales'},
  });
  const localPosts = localData?.posts?.edges?.map((edge) => edge.node) || [];

  const {data: policeData} = useQuery(getPostsByCategory, {
    variables: {categoryName: 'Policiales'},
  });
  const policePosts = policeData?.posts?.edges?.map((edge) => edge.node) || [];

  const {data: provintialData} = useQuery(getPostsByCategory, {
    variables: {categoryName: 'Provinciales'},
  });
  const provintialPosts = provintialData?.posts?.edges?.map((edge) => edge.node) || [];

  const {data: nationalData} = useQuery(getPostsByCategory, {
    variables: {categoryName: 'Nacionales'},
  });
  const nationalPosts = nationalData?.posts?.edges?.map((edge: { node: any; }) => edge.node) || [];

  const {data: internationalData} = useQuery(getPostsByCategory, {
    variables: {categoryName: 'Internacionales'},
  });
  const internationalPosts = internationalData?.posts?.edges?.map((edge) => edge.node) || [];

  const posts = data?.posts?.edges?.map((edge) => edge.node) || [];
  if (!posts) return null;
  return (
    <Layout title="DesdeCrespo" key="layout">
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
            <Grid item lg={12}>
              <TabFourPosts />
            </Grid>
            <Grid container lg={12}>
              <HeaderTitle title="Locales" />
              {localPosts.map((post) => (
                <Grid container lg={6}
                  key={`grid-local-post-featured-post-${post.id}`}
                  className={classes.card}>
                  <FeaturedPost
                    key={`local-featured-post-${post.id}`} post={post} />
                </Grid>
              ))}
            </Grid>
            <Grid container lg={12}>
              <HeaderTitle title="Policiales" />
              {policePosts.map((post) => (
                <Grid
                  key={`grid-police-featured-post-${post.id}`}
                  container lg={6}
                  className={classes.card}>
                  <FeaturedPost
                    key={`police-featured-post-${post.id}`}
                    post={post} />
                </Grid>
              ))}
            </Grid>
            <Grid container lg={12}>
              <HeaderTitle title="Provinciales" />
              {provintialPosts.map((post) => (
                <Grid key={`grid-provintial-featured-post-${post.id}`}
                  container
                  lg={6}
                  className={classes.card}>
                  <FeaturedPost
                    key={`provintial-featured-post-${post.id}`}
                    post={post} />
                </Grid>
              ))}
            </Grid>
            <Grid container lg={12}>
              <HeaderTitle title="Nacionales" />
              {nationalPosts.map((post) => (
                <Grid key={`grid-national-featured-post-${post.id}`}
                  container
                  lg={6}
                  className={classes.card}>
                  <FeaturedPost
                    key={`national-featured-post-${post.id}`}
                    post={post} />
                </Grid>
              ))}
            </Grid>
            <Grid container lg={12}>
              <HeaderTitle title="Internacionales" />
              {internationalPosts.map((post) => (
                <Grid
                  key={`grid-international-featured-post-${post.id}`}
                  container
                  lg={6}
                  className={classes.card}>
                  <FeaturedPost
                    key={`international-featured-post-${post.id}`}
                    post={post} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid lg={3} className={classes.rightColumn}>
            <TV />
            <Wather />
            <Radio />
            <ClicMe />
          </Grid>
        </Grid>
      </section>
    </Layout>
  );
};

export default Index;
