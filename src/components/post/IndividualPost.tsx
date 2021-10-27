import {gql, useQuery} from '@apollo/client';
import {CircularProgress, CssBaseline, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import React from 'react';
import NotFoundPage from '../../pages/404';
import Breadcrumb from '../breadcrumb/breadcrumb';
import InfiniteScrollComponent from '../categoria/infiniteScroll';
import HeaderTitle from '../common/headerTitle';
import SEO from '../seo';
import PostsRecientes from './PostsRecientes';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
  },
  rightColumn: {
    padingLeft: 5,
  },
}));

type Props = {
  path: string
  location: string
}

const IndividualPost = (props: Props) => {
  const getPost = gql`
    query getPost($id: ID!) {
      post(id: $id) {
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

  // const query: any = queryString.parse(location.search);
  const params: String[] = location.pathname.split('/');
  const id: String = params[3];
  const {loading, error, data} = useQuery(getPost, {
    variables: {id},
  });
  const category = data?.post?.categories?.nodes[0]?.name;

  const classes = useStyles();
  if (loading) return <CircularProgress />;
  if (error) return <NotFoundPage />;
  if (!category) return <div>Sin datos</div>;


  return (
    <section className={classes.container}>
      <SEO title="Inicio" />
      <CssBaseline />
      <Grid container className={classes.container}>
        <Grid lg={9}>
          <Grid container>
            <Grid item lg={11}>
              <Breadcrumb category={category} label={data?.post?.title} />
              <div dangerouslySetInnerHTML={{__html: data?.post?.content}} />
            </Grid>
            <Grid item lg={11}>
              <InfiniteScrollComponent />
            </Grid>
          </Grid>
        </Grid>
        <Grid lg={3} className={classes.rightColumn}>
          <PostsRecientes />
          <HeaderTitle title="PUBLICITE AQUÍ" />
          <img src={process.env.PUBLICIDAD5} />
          <img src={process.env.PUBLICIDAD2} />
          <img src={process.env.PUBLICIDAD4} />
          <img src="https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/Cabezal_Almanaque_SUSPENDIDO.jpg" className={classes.image}/>
          <img src=" https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/fh.png" className={classes.image}/>
          <img src="https://www.desdecrespo.com.ar/wp-content/uploads/2021/06/Cont.-Visintin.png" className={classes.image}/>
          <img src="https://www.desdecrespo.com.ar/wp-content/uploads/2021/09/Screenshot_2021-09-18-11-50-08-1024x576.png" className={classes.image}/>
        </Grid>
      </Grid>
    </section>
  );
};
export default IndividualPost;
