import { Router } from "@reach/router";
import React from "react";
import CategoryComponent from "../components/categoria/category";
import Layout from "../components/layout/Layout";

const Categoria = () => (
  
  <Layout location={window.location} title="Test">    
    <Router>
      <CategoryComponent path="/categoria/:name" />
    </Router>
  </Layout>
)
export default Categoria