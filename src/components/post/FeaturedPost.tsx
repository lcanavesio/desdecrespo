import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {navigate} from 'gatsby';
import React from 'react';
import {useStylesGlobal} from '../../utils/GlobalStyle';


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
  const classesGlobal = useStylesGlobal();
  const {post} = props;

  return (
    <>
      <Card className={classesGlobal.cardFeaturedPost}>
        <CardActionArea
          onClick={() => navigate(`/post/${post.slug}/${post.id}`)}
        >
          <CardMedia
            className={classesGlobal.cardMedia}
            component="img"
            alt={post.title}
            image={post.featuredImage?.node?.mediaItemUrl}
            title={post.title}
          />
          <CardContent
            onClick={() => navigate(`/post/${post.slug}/${post.id}`)}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classesGlobal.title}
            >
              {post.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
