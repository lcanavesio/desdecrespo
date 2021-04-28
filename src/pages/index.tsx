// If you don't want to use TypeScript you can delete this file!
import { Container, CssBaseline, Grid, makeStyles } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import { graphql, Link } from "gatsby"
import React from "react"
import FeaturedPost from "../components/layout/FeaturedPost"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import Radio from "../components/radio/radio"
//import { Link } from "gatsby"
import SEO from "../components/seo"
import { Loading } from "../utils/Loading"


const post1 = "hola como estas "
const post2 = ""
const post3 = ""

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10
  },
}))

const sections = [
  { title: "Inicio", url: "/" },
  { title: "Crespo", url: "crespo" },
  { title: "Provinciales", url: "provinciales" },
  { title: "Nacionales", url: "nacionales" },
  { title: "Internacionales", url: "internacionales" },
  { title: "Deportes", url: "deportes" },
  { title: "Policiales", url: "policiales" },
  { title: "Rurales", url: "rurales" },
  { title: "Salud", url: "salud" },
  { title: "Otros", url: "otros" },
]

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

const IndexPage = ({ data }) => {
  const classes = useStyles()
  let posts = []
  if (!data || !data.wpgraphql) {
    return <Loading />
  }
   posts = data.wpgraphql.posts.edges.map(edge => edge.node) || [];
  return (
    <>
      <SEO title="Using TypeScript" />
      <CssBaseline />
      <Header sections={sections} ultimo={["Test"]} />
      <Container maxWidth="lg">
        <main>
          <Grid container className={classes.container}>
            <Grid lg={9}>
              <Grid container lg={12}>

                <Grid lg={4} className={classes.card}>
                  <FeaturedPost key={posts[0].title} post={posts[0]} />
                </Grid>
                <Grid lg={4} className={classes.card}>
                  <FeaturedPost key={posts[1].title} post={posts[1]} />
                </Grid>
                <Grid lg={4} className={classes.card}>
                  <FeaturedPost key={posts[2].title} post={posts[2]} />
                </Grid>
              </Grid>
            </Grid>
            <Grid lg={3}>
              <Radio />
            </Grid>
          </Grid>


          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="Post" posts={posts} /> */}
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
      <pre>{JSON.stringify(posts, null, 4)}</pre>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    wpgraphql {
      posts(
        first: 10
        where: {orderby: {field: DATE, order: DESC}, categoryName: "locales"}
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
`