import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import {StaticImage} from 'gatsby-plugin-image';
import React, {memo} from 'react';
import Ultimo from '../ultimo/ultimo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
    root: {


      display: 'flex',
      alignItems: 'center',
    },
    menuButton: {
      marginLeft: -theme.spacing(2),
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
      display: 'flex',
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

  return (
    <>
      <Ultimo />
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.root} xs={12}>
            <Grid item xs={2}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon style={{color: '#fc4a00'}} />
              </IconButton>
            </Grid>
            <Grid item xs={10}>
              <StaticImage
                src="../../images/iconmobile.png"
                alt="Banner - Desde Crespo"

              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default memo(HeaderMobile);
