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

const CrespoPage = () => {
  return (
    <>
      <SEO title="Using TypeScript" />
      CRESPO
    </>
  )
}

export default CrespoPage