import { useMediaQuery } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { navigate } from 'gatsby'
import React from 'react'

const useStyles = makeStyles(theme => ({
  post: {
    position: 'relative',
  },
  card: {
    height: '100%',
    '&:hover': {
      '& $cardMedia': {
        transform: 'scale3d(1.05, 1.05, 1)',
      },
    },
  },
  cardMedia: {
    transition: '0.3s',
    height: 200,
    margin: 0,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: 21,
    fontWeight: 700,
    height: '100%',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
}))

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
  const classes = useStyles()
  const { post } = props

  const matches = useMediaQuery('(max-width:1279px)')

  return (
    <>
      <Card className={classes.card} style={{ minWidth: '100%' }}>
        <CardActionArea
          onClick={() => navigate(`/post/${post.slug}`)}
          style={{ minWidth: '100%' }}
        >
          <CardMedia
            style={{ minWidth: '100%' }}
            className={classes.cardMedia}
            component="img"
            alt={post?.title}
            image={post?.featuredImage?.node?.mediaItemUrl}
            title={post?.title}
          />
          <CardContent
            onClick={() => navigate(`/post/${post.slug}`)}
            style={{ minWidth: '100%', minHeight: matches ? '100%' : 95 }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {post?.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
