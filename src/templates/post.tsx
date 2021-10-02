import {graphql} from 'gatsby';
import React from 'react';

interface Props {
  post: any
}

// eslint-disable-next-line react/prop-types
const PostPage: React.FC<Props> = ({post}) => {
  // eslint-disable-next-line react/prop-types
  return <>{post.content}</>;
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
    wpgraphql: Props
  }
}

const selector = (
    Component: React.FC<Props>,
): React.FC<HocProp> => // eslint-disable react/display-name
  // eslint-disable-next-line react/prop-types
  function Selector({data, ...props}) {
    // eslint-disable-next-line react/prop-types
    return <Component {...props} post={data.wpgraphql.post} />;
  };

export default selector(PostPage);
