import { Router } from '@reach/router';
import React from 'react';
import CategoryComponent from '../components/categoria/category';

const Categoria = () => (

  <Router>
    <CategoryComponent path="/categoria/:name" />
  </Router>
);
export default Categoria;
