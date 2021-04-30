import { CssBaseline, Grid, makeStyles } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import FeaturedPost from "../components/post/FeaturedPost"
import SlidePosts from "../components/post/SlidePosts"
import Radio from "../components/radio/radio"
//import { Link } from "gatsby"
import SEO from "../components/seo"
import { Loading } from "../utils/Loading"

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10
  },
}))

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
  const data = useStaticQuery(graphql`
  query GET_POST {
    wpgraphql {
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
  }
`);

  const posts = data?.wpgraphql?.posts?.edges?.map(edge => edge.node) || [];
  return (
    <Layout location={window.location} title="Test">
      <section className={classes.container}>
        <SEO title="Inicio" />
        <CssBaseline />
        <Grid container className={classes.container}>
          <Grid lg={9}>
            <Grid container lg={12}>
              <Grid item lg={12}>
                <SlidePosts key={posts[0].title} posts={[posts[0]]} />
              </Grid>
            </Grid>
            <Grid container lg={12}>
              <Grid item lg={4} className={classes.card}>
                <FeaturedPost key={posts[0].title} post={posts[0]} />
              </Grid>
              <Grid item lg={4} className={classes.card}>
                <FeaturedPost key={posts[1].title} post={posts[1]} />
              </Grid>
              <Grid item lg={4} className={classes.card}>
                <FeaturedPost key={posts[2].title} post={posts[2]} />
              </Grid>
            </Grid>
          </Grid>
          <Grid lg={3}>
            <Radio />
          </Grid>
        </Grid>
      </section>
    </Layout>
  )
}

export default Index