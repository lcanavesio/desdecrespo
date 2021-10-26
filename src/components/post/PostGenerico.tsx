import { gql, useQuery } from '@apollo/client';
import { Grid, GridSize } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import NotFoundPage from '../../pages/404';
import { useStylesGlobal } from '../../utils/GlobalStyle';
import HeaderTitle from '../common/headerTitle';
import FeaturedPost from './FeaturedPost';

type Props = {
  titulo: string
  categoryName: string
  first: number
}
const PostGenerico = (props: Props) => {
  const { categoryName, first, titulo } = props;
  const classesGlobal = useStylesGlobal();

  const getPosts = gql`
    query getPosts($categoryName: String, $first: Int) {
      posts(
        first: $first
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
  let gridValue: GridSize;
  switch (first) {
    case 2:
    case 8:
    default:
      gridValue = 6;
      break;
    case 3:
    case 4:
      gridValue = 4;
      break;
  }

  const { loading, error, data } = useQuery(getPosts, {
    variables: { categoryName, first },
  });
  const posts = data?.posts?.edges?.map((edge) => edge.node) || null;

  if (error) return <NotFoundPage />;

  const showSkeleton = () => {
    const skeletons = [];

    for (let i = 0; i < first; i++) {
      skeletons.push(
        <div>
          <Skeleton
            variant="rect"
            animation="wave"
            style={{
              minWidth: 300, minHeight: 200,
              marginLeft: 10, marginRight: 10
            }} />
          <Skeleton variant="text"
            animation="wave"
            style={{
              minWidth: 300, minHeight: 30,
              marginLeft: 10, marginRight: 10
            }} />
        </div>
      )
    }
    return skeletons;
  };

  return (
    <>
      <Grid container>
        <HeaderTitle title={titulo} />
        {
          (!loading && posts) ?
            posts.map((post, index) => (
              <Grid
                item
                key={index}
                lg={gridValue}
                className={classesGlobal.card}
              >
                <FeaturedPost key={index} post={post} />
              </Grid>

            )) :
            showSkeleton()
        }
      </Grid>
    </>
  );
};

export default PostGenerico;
