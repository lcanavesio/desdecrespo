import { gql, useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import * as queryString from "query-string";
import React from 'react';

const useStyles = makeStyles((theme) => ({

}));

type Props = {
  path: string;
  location: string;
};

const IndividualPost = (props: Props) => {
  const getPost = gql`
  query getPost($id:ID!) {
    post(        
      id: $id
    ) {
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
`;

  const query: any = queryString.parse(location.search);
  let params: String[] = location.pathname.split("/");
  let id: String = params[3];

  const { loading, error, data } = useQuery(getPost, {
    variables: { id }
  });


  const classes = useStyles();  

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: data?.post?.content }} />
    </>
  );
}
export default IndividualPost;