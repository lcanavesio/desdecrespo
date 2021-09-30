import {gql, useQuery} from '@apollo/client';
import {
  CircularProgress,
  CssBaseline,
  GridList,
  GridListTile,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import {Category} from '../../interfaces/category.interface';
import NotFoundPage from '../../pages/404';
import {Constants} from '../../utils/constants';
import Breadcrumb from '../breadcrumb/breadcrumb';
import FeaturedPost from '../post/FeaturedPost';
import SEO from '../seo';
import InfiniteScrollComponent from './infiniteScroll';


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
}));

type Props = {
  path: string
  location: string
}

const CategoryComponent = (props: Props) => {
  const getPosts = gql`
    query getPosts($categoryName: String!) {
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

  const category: Category = Constants.CATEGORIES.find(
      (c) => c.url === location.pathname,
  );
  if (!category) {
    return null;
    // return 404
  }

  const {loading, error, data} = useQuery(getPosts, {
    variables: {categoryName: category.databaseName},
  });
  const posts = data?.posts?.edges?.map((edge) => edge.node) || null;
  const classes = useStyles();

  if (error) return <NotFoundPage />;
  if (!posts) return <div>Sin datos</div>;
  if (loading) return <CircularProgress />;
  return (
    <section className={classes.container}>
      <SEO title="Inicio" />
      <CssBaseline />
      <Breadcrumb category={category.databaseName} label={data?.post?.title} />
      <GridList cellHeight={288} cols={2}>
        {posts.map((post) => (
          <GridListTile key={`gridList-${category.title}-${post?.title}`}>
            <FeaturedPost
              key={`${category.title}-${post?.title}`}
              post={post}
            />
          </GridListTile>
        ))}
      </GridList>
      <InfiniteScrollComponent />
    </section>
  );
};
export default CategoryComponent;
