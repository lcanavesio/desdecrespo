// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { Link, graphql } from "gatsby"
import { Typography } from "@material-ui/core"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {}

const IndexPage = ({ data }) => {
  console.log("data", data)
  let rows = []
  let edges = (data.wpgraphql && data.wpgraphql.posts.edges) || []
  rows = edges.map((edge) => edge.node)
  return (
    <>
      <Layout>
        <SEO title="Using TypeScript" />
        <Typography>Agregando material ui</Typography>
      
        <pre>{JSON.stringify(rows, null, 4)}</pre>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query GET_POST {
    wpgraphql {
    posts(first: 10, where: {orderby: {field: DATE, order: DESC},
      categoryName: "locales"}) {
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
