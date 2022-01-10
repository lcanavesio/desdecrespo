import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { memo } from 'react';
import Ultimo from '../ultimo/ultimo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
    root: {
      display: 'contents',
      alignItems: 'center',
    },
    menuButton: {
      marginLeft: -theme.spacing(2),
      background: 'linear-gradient(20deg, #b91b0c 0%, #e28f12 100%)',
      color: 'white',
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
            <Grid item={true}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon style={{color: 'white'}} />
              </IconButton>
            </Grid>
            <Grid item xs={11} style={{width: '100%', textAlign: 'center'}}>
              <Link to="/" style={{width: '100%'}}>
                <StaticImage
                  src="../../images/iconmobile.png"
                  alt="Banner - Desde Crespo"

                />
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default memo(HeaderMobile);
