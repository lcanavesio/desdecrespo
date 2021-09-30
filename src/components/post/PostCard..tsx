import {Card,
  CardContent,
  CardMedia,
  Divider,
  makeStyles,
  Typography} from '@material-ui/core';
import {Link} from 'gatsby';
import React from 'react';
// import { Tags } from '@tryghost/helpers-gatsby'
// import { readingTime as readingTimeHelper } from '@tryghost/helpers'


const useStyles = makeStyles((theme) => ({
  cardLink: {
    color: 'white',
    textDecoration: 'none',
  },
  card: {
    'margin': 'auto',
    'transition': '0.3s',
    'boxShadow': '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  media: {
    paddingTop: '56.25%',
  },
  content: {
    textAlign: 'left',
    padding: 10,
  },
  divider: {
    margin: `10px 0`,
  },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    'display': 'inline-block',
    'border': '2px solid white',
    '&:not(:first-of-type)': {
      marginLeft: 10,
    },
  },
  date: {
    textAlign: 'right',
    paddingTop: 10,
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

const PostCard = (props: Props) => {
  const classes = useStyles();
  const {post} = props;
  if (post === null) return null;
  return (
    <Link to={`/post/${post.slug}/${post.id}`} className={classes.cardLink}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={post.featuredImage?.node?.mediaItemUrl}
        />
        <CardContent className={classes.content}>
          <Typography
            className={'MuiTypography--heading'}
            variant={'h6'}
            gutterBottom
          >
            {post.title}
          </Typography>
          {/* <Typography
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                    >
                        {post.description}
                    </Typography> */}
          <Divider className={classes.divider} light />
          <Typography className={classes.date} gutterBottom>
            {post.date}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostCard;
