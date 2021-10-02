import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import {makeStyles} from '@mui/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import {Theme} from '@mui/material/styles';
const useStyles = makeStyles((theme: Theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const {posts, title} = props;

  return (
    <Grid item xs={12} md={8}>

      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <>
          {post}
        </>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
