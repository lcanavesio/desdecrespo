import { CssBaseline, makeStyles } from "@material-ui/core"
import React from "react"
import Layout from "../components/layout/Layout"
//import { Link } from "gatsby"
import SEO from "../components/seo"

const useStyles = makeStyles(theme => ({  
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10
  },
}))

interface Props {
  data: {
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Crespo = (props: Props) => {
  const classes = useStyles();
 
  
  return (
    <Layout location={window.location} title="Test">
      <section className={classes.container}> 
        <SEO title="Inicio"/>
        <CssBaseline />
        CRESPO
      </section>
    </Layout>
  )
}

export default Crespo