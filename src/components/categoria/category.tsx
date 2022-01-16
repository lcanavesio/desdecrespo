import { gql, useQuery } from '@apollo/client';
import {
  CssBaseline,
  GridList,
  GridListTile,
  useMediaQuery
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { Category } from '../../interfaces/category.interface';
import { Constants } from '../../utils/constants';
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
  categoryName: String
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

  const {categoryName} = props;
  const category: Category = Constants.CATEGORIES.find(
      (c) => c.url === `/categoria/${categoryName}`,
  );
  const matches = useMediaQuery('(max-width:1279px)');

  if (!category) {
    return null;
    // return 404
  }

  const {loading, error, data} = useQuery(getPosts, {
    variables: {categoryName: category.databaseName},
  });
  const posts = data?.posts?.edges?.map((edge) => edge.node) || null;
  const classes = useStyles();

  const showSkeleton = () => {
    const skeletons = [];

    for (let i = 0; i < 10; i++) {
      skeletons.push(
          <GridListTile>
            <Skeleton
              animation="wave"
              variant="rect"
              style={{width: '100%', height: '80%', padding: 5}}
            />
            <Skeleton
              variant="text"
              animation="wave"
              style={{width: '100%', height: '20%'}}
            />
          </GridListTile>,
      );
    }
    return skeletons;
  };

  if (error) return null;

  return (
    <section className={classes.container}>
      <SEO
        title={category.title}
        description={`Categoría - ${category.title}`}
      />
      <CssBaseline />
      <Breadcrumb category={category.databaseName} label={data?.post?.title} />
      <GridList cellHeight={288} cols={matches ? 1 : 2}>
        {!loading && posts ?
          posts.map((post) => (
            <GridListTile key={`gridList-${category.title}-${post?.title}`}>
              <FeaturedPost
                key={`${category.title}-${post?.title}`}
                post={post}
              />
            </GridListTile>
          )) :
          showSkeleton()}
      </GridList>
      <InfiniteScrollComponent />
    </section>
  );
};
export default CategoryComponent;
