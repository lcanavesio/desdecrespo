import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'gatsby';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  cardLink: {
    width: '100%',
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
  cardMediaContainer: {
    padding: 5,
    minHeight: 300,
    width: '100%',
  },
  media: {
    backgroundPosition: '50% 50%',
    height: '100%',
    width: '100%',
  },
  content: {
    textAlign: 'left',
    //padding: 10,
  },
  divider: {
    margin: `20px 0`,
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
  title: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: 21,
    fontWeight: 700,
    height: '100%',
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  },
  summary: {
    height: '100%',
  },
  icon: {
    color: '#fc4a00'
  },
}));

type Post = {
  id: string;
  date: string;
  title: string;
  content: string,
  slug: string;
  featuredImage: any;
};

type Props = {
  post: Post;
};

const DATE_OPTIONS = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const getSummary = (text: string, limit: number) => {
  const re = /[\s]+/gm; let results = null; let count = 0;
  while ((results = re.exec(text)) !== null && ++count < limit) { }
  if (results !== null && count >= limit) {
    return text.substring(0, re.lastIndex - results[0].length);
  }
  return '';
};

const PostCard = (props: Props) => {
  const classes = useStyles();
  const { post } = props;
  if (post === null) return null;
  return (
    <Link to={`/post/${post.slug}`} className={classes.cardLink}>
      <Card className={classes.card}>
        <Grid container lg={12}>
          <Grid item lg={6} className={classes.cardMediaContainer}>
            <CardMedia
              className={classes.media}
              image={post.featuredImage?.node?.mediaItemUrl}
            />
          </Grid>
          <Grid item lg={6}>
            <CardContent className={classes.content}>
              <Typography
                className={classes.title}
                variant={'h6'}
                gutterBottom
              >
                {post.title}
              </Typography>
              <Divider className={classes.divider} light />
              <Typography>
                <div className={classes.summary}
                  dangerouslySetInnerHTML={{ __html: getSummary(post?.content, 40) }} />
              </Typography>
              <Grid container lg={12} justifyContent="flex-end" style={{ paddingTop: 20 }}>
                <Button variant="outlined" startIcon={<VisibilityIcon className={classes.icon} />}>
                  Leer más
                </Button>
              </Grid>
              <Divider className={classes.divider} light />
              <Typography className={classes.date} gutterBottom>
                {(new Date(post.date)).toLocaleDateString('es-ES', DATE_OPTIONS)}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Link>
  );
};

export default PostCard;
