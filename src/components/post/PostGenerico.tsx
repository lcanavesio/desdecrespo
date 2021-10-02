import {gql, useQuery} from '@apollo/client';
import {CircularProgress, Grid, GridSize} from '@material-ui/core';
import React from 'react';
import {useStylesGlobal} from '../../utils/GlobalStyle';
import NotFoundPage from '../../pages/404';
import FeaturedPost from './FeaturedPost';

type Props = {
  titulo: string
  categoryName: string
  first: number
}
const PostGenerico = (props: Props) => {
  const {categoryName, first, titulo} = props;
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
      gridValue = 6;
      break;
    case 3:
      gridValue = 4;
      break;
    case 4:
      gridValue = 4;
      break;
    case 8:
      gridValue = 6;
    default:
      gridValue = 6;
  }

  const {loading, error, data} = useQuery(getPosts, {
    variables: {categoryName, first},
  });
  const posts = data?.posts?.edges?.map((edge) => edge.node) || null;

  if (loading) return <CircularProgress />;
  if (error) return <NotFoundPage />;
  if (!posts) return <div>Sin datos</div>;

  return (
    <>
      <Grid container
        className={classesGlobal.container}
        key="postgenericogrid">
        <div key="postgenericodiv">
          <h2 className={classesGlobal.titulo}>
            <span className={classesGlobal.tituloSpan}>{titulo} </span>
          </h2>
        </div>
        <Grid container>
          {posts.map((post, index) => (
            <Grid
              item
              key={index}
              lg={gridValue}
              className={classesGlobal.card}
            >
              <FeaturedPost key={index} post={post} />
            </Grid>

          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default PostGenerico;
