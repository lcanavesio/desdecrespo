import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
