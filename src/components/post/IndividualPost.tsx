import { gql, useQuery } from '@apollo/client';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as queryString from "query-string";
import React from 'react';
import Breadcrumb from '../breadcrumb/breadcrumb';
import SEO from '../seo';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 10,
  },
}))

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
      categories {
        nodes {
          name
        }
      }
    }
  }
`;

  const query: any = queryString.parse(location.search);
  const params: String[] = location.pathname.split("/");
  const id: String = params[3];
  const { loading, error, data } = useQuery(getPost, {
    variables: { id }
  });
  const category = data?.post?.categories?.nodes[0]?.name;

  const classes = useStyles();

  return (

    <section className={classes.container}>
      <SEO title="Inicio" />
      <CssBaseline />
      <Grid container className={classes.container}>
        <Grid lg={9}>
          <Grid container lg={12}>
            <Grid item lg={12}>
              <Breadcrumb category={category} label={data?.post?.title} />
              <div dangerouslySetInnerHTML={{ __html: data?.post?.content }} />
            </Grid>
          </Grid>          
        </Grid>
        <Grid lg={3}>         
        </Grid>
      </Grid>
    </section>
  );
}
export default IndividualPost;