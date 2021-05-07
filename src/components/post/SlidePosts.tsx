import { makeStyles } from '@material-ui/core/styles';
import { Link, navigate } from "gatsby";
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme) => ({
  carousel: {
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    position: 'relative',
    height: 436,
    width: '100%',
    objectFit: 'cover',
    margin: 0,
    borderRadius: 5
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
      <Carousel className={classes.carousel}>
        {
          posts.map((post) => (            
            <div>
              <Link to={`post/${post.slug}/${post.id}`} className={classes.link}>
                <img src={post.featuredImage?.node?.mediaItemUrl} className={classes.image} onClick={() => navigate(`post/${post.slug}/${post.id}`)} />
                <h3 className={classes.postTitle}>
                  {post.title}
                </h3>
              </Link>
            </div>
          ))
        }
      </Carousel>
    </>
  );
}
export default SlidePosts;