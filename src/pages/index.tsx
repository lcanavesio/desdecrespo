import {gql, useQuery} from '@apollo/client';
import {
  CircularProgress,
  CssBaseline,
  Grid,
} from '@material-ui/core';
import React from 'react';
import {PublicidadGenerico, PublicidadPrincipal} from '../utils/Publicidad';
import Layout from '../components/layout/Layout';
import FeaturedPost from '../components/post/FeaturedPost';
import SlidePosts from '../components/post/SlidePosts';
import Radio from '../components/radio/radio';
import SEO from '../components/seo';
import TV from '../components/tv/TV';
import NotFoundPage from './404';
import Crespo from '../components/post/Crespo';
import PolicialesProvinciales from '../components/post/PolicialesProvinciales';
import {useStylesGlobal} from '../utils/GlobalStyle';
import Nacionales from '../components/post/Nacionales';
import Internacionales from '../components/post/Internacionales';
import Deportes from '../components/post/Deportes';
import NoSePierda from '../components/post/NoSePierda';

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
  const classesGlobal = useStylesGlobal();

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
      <section className={classesGlobal.container}>
        <SEO title="Inicio" />
        <CssBaseline />
        <Grid container className={classesGlobal.container}>
          <Grid lg={9}>
            <Grid container lg={12}>
              <Grid item lg={12}>
                <SlidePosts key={posts[0]?.title} posts={posts} />
              </Grid>
            </Grid>
            <Grid container lg={12}>
              <Grid item lg={4} className={classesGlobal.card}>
                <FeaturedPost key={posts[0]?.title} post={posts[0]} />
              </Grid>
              <Grid item lg={4} className={classesGlobal.card}>
                <FeaturedPost key={posts[1]?.title} post={posts[1]} />
              </Grid>
              <Grid item lg={4} className={classesGlobal.card}>
                <FeaturedPost key={posts[2]?.title} post={posts[2]} />
              </Grid>
            </Grid>
            <PublicidadGenerico
              key="Publicidad1"
              href={process.env.PUBLICIDAD1}
            />
            <Grid container lg={12}>
              <Grid item lg={4} className={classesGlobal.card}>
                <FeaturedPost key={posts[3]?.title} post={posts[3]} />
              </Grid>
              <Grid item lg={4} className={classesGlobal.card}>
                <FeaturedPost key={posts[4]?.title} post={posts[4]} />
              </Grid>
              <Grid item lg={4} className={classesGlobal.card}>
                <FeaturedPost key={posts[5]?.title} post={posts[5]} />
              </Grid>
            </Grid>
            <PublicidadPrincipal />
            <Crespo />
            <PublicidadGenerico
              key="Publicidad6"
              href={process.env.PUBLICIDAD6}
            />
            <PolicialesProvinciales />
            <Nacionales />
            <Internacionales />
            <Deportes />
            <NoSePierda />
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
