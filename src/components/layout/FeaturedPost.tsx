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
    paddingLeft: 10,
    paddingRig: 10,
  },
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
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={post.featuredImage?.node?.mediaItemUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};