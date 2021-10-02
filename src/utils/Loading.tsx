import CircularProgress from '@mui/material/CircularProgress';
import {useStylesGlobal} from './GlobalStyle';
import React from 'react';

export const Loading = () => {
  const classes = useStylesGlobal();
  return (
    <div className={classes.loadingShadingMui}>
      <CircularProgress className={classes.loadingIconMui} />
    </div>
  );
};
