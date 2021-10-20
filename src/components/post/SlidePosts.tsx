import { gql, useQuery } from '@apollo/client'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link, navigate } from 'gatsby'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import NotFoundPage from '../../pages/404'

const useStyles = makeStyles(theme => ({
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
    borderRadius: 5,
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
  },
}))

const SlidePosts = () => {
  const classes = useStyles()
  const getPosts = gql`
    query getPosts {
      posts(
        first: 8
        where: {
          orderby: { field: DATE, order: DESC }
          categoryName: "Destacadas, Destacados"
        }
      ) {
        edges {
          node {
            id
            date
            title
            slug
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `

  const { loading, error, data } = useQuery(getPosts)
  const posts = data?.posts?.edges?.map(edge => edge.node) || null

  if (loading) return <CircularProgress />
  if (error) return <NotFoundPage />
  if (!posts) return <div>Sin datos</div>

  return (
    <>
      <Carousel className={classes.carousel} animation={'slide'}>
        {posts.map((post, index) => (
          <div key={index}>
            <Link to={`/post/${post.slug}/${post.id}`} className={classes.link}>
              <img
                src={post.featuredImage?.node?.mediaItemUrl}
                className={classes.image}
                onClick={() => navigate(`/post/${post.slug}/${post.id}`)}
              />
              <h3 className={classes.postTitle}>{post.title}</h3>
            </Link>
          </div>
        ))}
      </Carousel>
    </>
  )
}
export default SlidePosts
