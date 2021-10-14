import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { navigate } from "gatsby";
import PropTypes from 'prop-types';
import React from 'react';

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
  id: string
  date: string
  title: string
  slug: string
  featuredImage: any
}

type Props = {
  post: Post
}

export default function FeaturedPost(props: Props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea onClick={() => navigate(`/post/${post.slug}/${post.id}`)}>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt={post?.title}
            image={post?.featuredImage?.node?.mediaItemUrl}
            title={post?.title}
          />
          <CardContent onClick={() => navigate(`/post/${post.slug}/${post.id}`)}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              {post?.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
