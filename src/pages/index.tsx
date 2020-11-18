// If you don't want to use TypeScript you can delete this file!
import { Container, CssBaseline, Grid, makeStyles } from "@material-ui/core"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Main from "../components/layout/Main"
import MainFeaturedPost from "../components/layout/MainFeaturedPost"
import FeaturedPost from "../components/layout/FeaturedPost"

import Sidebar from "../components/layout/Sidebar"
//import { Link } from "gatsby"
import SEO from "../components/seo"
import GitHubIcon from "@material-ui/icons/GitHub"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"

const post1 = "hola como estas "
const post2 = ""
const post3 = ""

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

const sections = [
  { title: "Inicio", url: "#" },
  { title: "Crespo", url: "#" },
  { title: "Provinciales", url: "#" },
  { title: "Nacionales", url: "#" },
  { title: "Internacionales", url: "#" },
  { title: "Deportes", url: "#" },
  { title: "Policiales", url: "#" },
  { title: "Rurales", url: "#" },
  { title: "Salud", url: "#" },
  { title: "Otros", url: "#" },
]

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
}

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
]

const posts = [post1, post2, post3]

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
}

const IndexPage = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query GET_POST {
      wpgraphql {
        posts(
          first: 10
          where: {
            orderby: { field: DATE, order: DESC }
            categoryName: "locales"
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
    }
  `)

  console.log("data", data)
  let rows = []
  let edges = (data.wpgraphql && data.wpgraphql.posts.edges) || []
  rows = edges.map(edge => edge.node)
  return (
    <>
      <SEO title="Using TypeScript" />
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Desde Crespo" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Post" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Desde Crespo"
        description="Semanario Diario"
      />
      <pre>{JSON.stringify(rows, null, 4)}</pre>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

export default IndexPage

// export const query = graphql`
//   query GET_POST {
//     wpgraphql {
//     posts(first: 10, where: {orderby: {field: DATE, order: DESC},
//       categoryName: "locales"}) {
//       edges {
//         node {
//           id
//           date
//           title
//           slug
//           featuredImage {
//             node {
//               mediaItemUrl
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `
