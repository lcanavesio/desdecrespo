import {Button, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React, {memo} from 'react';
import Ultimo from '../ultimo/ultimo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
    root: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
      color: 'black',
    },

    items2: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'baseline',
    },

    toolbar: {
      '&[class*=MuiToolbar-root]': {
        backgroundColor: 'white',
      },
    },

    toolbarTitle: {
      color: 'black',
    },
  }),
);

interface HeaderProps {
  onDrawerToggle: () => void
  visible?: boolean
}

function HeaderMobile(props: HeaderProps) {
  const {onDrawerToggle} = props;
  const classes = useStyles();
  const handleClickOpen = () => {
    console.log('click');
  };

  return (
    <>
      <Ultimo />
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.root} xs={12}>
            <Grid item xs={1}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={7}>
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                className={classes.toolbarTitle}
              >
                Desde Crespo
              </Typography>
            </Grid>

            <Grid item xs={3}>
              <Button variant="outlined" size="small" color="secondary">
               En vivo
              </Button>
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={handleClickOpen}>
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default memo(HeaderMobile);
