import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({  
  image: {
    position: 'relative',
    width: '100%',    
  },
  postTitle: {
    position: 'absolute',
    top: '80%',
    left: '5%',
    fontSize: 26,
    fontWeight: 600,
  },
  link: {
    color: 'white',
    textDecoration: 'none',    
  }
}));

type Post = {
  id: string;
  date: string;
  title: string;
  slug: string;
  featuredImage: any;
};

type Props = {
  posts: Post[];
};


const SlidePosts = (props: Props) => {
  const classes = useStyles();
  const { posts } = props;

  return (
    <>
      <Carousel>
        {
          posts.map((post) => (
            <Paper>
              <img src={post.featuredImage?.node?.mediaItemUrl} className={classes.image}/>
              <a href="https://www.desdecrespo.com.ar/crespo-registro-una-decena-de-casos-de-covid-19-este-jueves/"></a>
              <h3 className={classes.postTitle}>
                <a href="https://www.desdecrespo.com.ar/crespo-registro-una-decena-de-casos-de-covid-19-este-jueves/" className={classes.link}>
                  Crespo registró una decena de casos de Covid-19 este jueves </a>
              </h3>
            </Paper>
          ))
        }
      </Carousel>
    </>
  );
}
export default SlidePosts;