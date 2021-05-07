import { graphql } from 'gatsby';
import React from 'react';

interface Props {
  post: any;
}

const PostPage: React.FC<Props> = ({ post }) => {
  return (
    <>
      {post.content}
    </>
  );
};

export const query = graphql`
  query($slug: ID!) {
    wpgraphql {
      post(id: $slug) {
        content
        slug
        title
        uri
        date
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

interface HocProp {
  data: {
    wpgraphql: Props;
  };
}

const selector = (
  Component: React.FC<Props>,
): React.FC<HocProp> => // eslint-disable react/display-name
  function Selector({ data, ...props }) {
    return <Component {...props} post={data.wpgraphql.post} />;
  };

export default selector(PostPage);
