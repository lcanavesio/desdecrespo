import { Router } from '@reach/router';
import React from 'react';
import IndividualPost from '../components/post/IndividualPost';

const Post = () => (

  <Router>
    <IndividualPost path="/post/:slug/:id" />
  </Router>
);
export default Post;
