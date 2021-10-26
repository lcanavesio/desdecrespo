import {gql, useQuery} from '@apollo/client';
import React, {useContext, useState} from 'react';

interface PostsContextInterface {
  datosPosts?: any
  errorPosts?: any
  loadingPosts?: boolean
  firstExpediente: number
  skipExpediente: number
  nextPosts: number
  setNextPosts: React.Dispatch<React.SetStateAction<number>>

}

export const PostsContext =
  React.createContext<PostsContextInterface>(undefined);

interface PostsProvider {
  buscar?: string
  first: number
  skip?: number
  categoryName: string
}
const INITIAL_PAGE = 0;

export const PostsProvider: React.FunctionComponent<PostsProvider> = (
    props: PostsProvider,
) => {
  const {categoryName, first, skip} = props;
  const [nextPosts, setNextPosts] = useState(INITIAL_PAGE);

  const myCategory = ['policiales', 'provinciales'];

  const categoria = myCategory[nextPosts] || categoryName;
  const {
    loading: loadingPosts,
    error: errorPosts,
    data: datosPosts,
  } = useQuery(getPosts, {
    variables: {categoria, first},
  });

  const valorInicial = {
    error: errorPosts,
    loadingPosts: loadingPosts,
    datosPosts: datosPosts,
    firstExpediente: first,
    skipExpediente: skip,
    nextPosts,
    setNextPosts,
  };

  return <PostsContext.Provider value={valorInicial} {...props} />;
};

export function usePostsContext() {
  const context = useContext(PostsContext);

  if (context === undefined) {
    throw new Error('usePosts debe estar entre PostsProvider');
  }
  return context;
}

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
