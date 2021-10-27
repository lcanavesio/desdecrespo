import { gql, useQuery } from '@apollo/client';
import { CircularProgress, CssBaseline, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Waypoint } from 'react-waypoint';
import NotFoundPage from '../../pages/404';
import { Constants } from '../../utils/constants';
import PostCard from '../post/PostCard.';
import SEO from '../seo';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
    // paddingLeft: 15,
    // paddingRight: 15,
  },
}));

type Props = {
  path?: string;
  location?: string;
};

const InfiniteScrollComponent = (props: Props) => {
  const getPosts = gql`
  query getPosts ($categoryName:String, $first:Int, $cursor:String) {
    posts(
      first: $first,
      after: $cursor
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: $categoryName
      }
    ) {
      edges {
        cursor
        node {
          id
          date
          title
          slug
          content
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

  let category: Category = Constants.CATEGORIES
    .find((c) => c.url === location.pathname);

  if (!category) {
    category = ['Locales', 'Policiales', 'Nacionales'];
  }
  const { loading, error, data, fetchMore, networkStatus } = useQuery(getPosts, {
    variables: { categoryName: category.databaseName, first: 10, cursor: null },
  });
  const edges = data?.posts?.edges || null;
  const classes = useStyles();

  if (loading) return <CircularProgress />;
  if (error) return <NotFoundPage />;
  if (!edges) return <div>Sin datos</div>;

  return (
    <section className={classes.container}>
      <SEO title="Inicio" />
      <CssBaseline />

      <List>
        {
          edges.map((x, i) => (
            <React.Fragment key={x.id}>
              <ListItem style={{paddingLeft: 0, paddingRight: 0}}>
                <PostCard post={x.node} />
              </ListItem>
              {i === edges.length - 2 &&
                (<Waypoint onEnter={() => {
                  fetchMore({
                    variables: {
                      first: 5,
                      cursor: edges[edges.length - 1].cursor,
                    },
                    updateQuery: (pv, { fetchMoreResult }) => {
                      if (!fetchMoreResult) {
                        return pv;
                      }

                      return {
                        posts: {
                          edges: [
                            ...pv.posts.edges,
                            ...fetchMoreResult.posts.edges,
                          ],
                        },
                      };
                    },
                  });
                }} />
                )}
            </React.Fragment>
          ))}
        {networkStatus === 3 && <CircularProgress />}
      </List>
    </section>
  );
};
export default InfiniteScrollComponent;
