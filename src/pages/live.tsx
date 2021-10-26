import { makeStyles } from '@material-ui/core';
import React from 'react';
import Layout from "../components/layout/Layout";
import TV from '../components/tv/TV';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

const LivePage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.container}>
        <TV />
      </div>

    </Layout>
  );
};

export default LivePage;
