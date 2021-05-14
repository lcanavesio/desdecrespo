import { gql, useQuery } from '@apollo/client';
import { CssBaseline, GridList, GridListTile } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as queryString from "query-string";
import React from 'react';
import { Category } from 'src/interfaces/category.interface';
import { Constants } from "../../utils/constants";
import FeaturedPost from '../post/FeaturedPost';
import SEO from '../seo';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
}))

type Props = {
  path: string;
  location: string;
};

const CategoryComponent = (props: Props) => {

  const getPosts = gql`
  query getPosts ($categoryName:String!) {
    posts(
      first: 10
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

const getInfinityScroll = gql`
  query streetNames($first: Int, $after: String) {
    streetNames(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          index
          streetName
          hash
        }
      }
    }
  }
`;

  const query: any = queryString.parse(location.search);
  const category: Category = Constants.CATEGORIES.find(c => c.url === location.pathname);
  if (!category) {
    return null;
    //return 404
  }

  const { loading, error, data } = useQuery(getPosts, {
    variables: { categoryName: category.databaseName }
  });
  const posts = data?.posts?.edges?.map(edge => edge.node) || null;
  const classes = useStyles();

  if (!posts) return null;
  return (
    <section className={classes.container}>
      <SEO title="Inicio" />
      <CssBaseline />
      <GridList cellHeight={288} cols={2}>
        {posts.map((post) => (
          <GridListTile key={`gridList-${category.title}-${post?.title}`}>
            <FeaturedPost key={`${category.title}-${post?.title}`} post={post} />  
          </GridListTile>
        ))}
      </GridList>
    </section>
  );
}
export default CategoryComponent;