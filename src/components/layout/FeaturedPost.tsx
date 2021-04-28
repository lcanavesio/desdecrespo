import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  post: {
    position: 'relative'
  },
  card: {
    height: '100%',    
    '&:hover': {   
      "& $cardMedia": {
        transform: "scale3d(1.05, 1.05, 1)"
      }
    },
  },
  cardMedia: {
    transition: '0.3s',
    height: 200,
    margin: 0
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontFamily: 'Barlow',
    fontSize: 21,
    fontWeight: 700,
    height: '100%',

    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
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
  post: Post;
};


export default function FeaturedPost(props: Props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt={post.title}
            image={post.featuredImage?.node?.mediaItemUrl}
            title={post.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              {post.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};