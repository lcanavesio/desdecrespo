import { gql, useQuery } from '@apollo/client';
import { CssBaseline, GridList, GridListTile, makeStyles } from "@material-ui/core";
import { navigate } from 'gatsby';
import React from "react";
import Layout from "../components/layout/Layout";
import FeaturedPost from '../components/post/FeaturedPost';
import SEO from "../components/seo";

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

const getPostsSearch = gql`
query getPostsSearch ($keyword:String!) {
  posts(
    first: 10
    where: {
      search: $keyword
      orderby: { field: DATE, order: DESC }      
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


const BusquedaPage = (props: Props) => {
  const classes = useStyles();

  const search: string = location?.search;
  const keyword: string = new URLSearchParams(search).get('keyword');;
  
  if (!keyword) navigate(`/`);

  const { loading, error, data } = useQuery(getPostsSearch, {
    variables: { keyword: keyword }
  });
  const posts = data?.posts?.edges?.map(edge => edge.node) || null;
  console.log("posts", posts)
  
  if (!posts) return null;
  return (
    <Layout title="Busqueda">
      <section className={classes.container}> 
        <SEO title="Busqueda"/>
        <CssBaseline />
        <GridList cellHeight={288} cols={2}>
        {posts.map((post) => (
          <GridListTile key={`gridList-${post.title}-${post?.title}`}>
            <FeaturedPost key={`${post.title}-${post?.title}`} post={post} />
          </GridListTile>
        ))}
      </GridList>
      </section>
    </Layout>
  )
}

export default BusquedaPage