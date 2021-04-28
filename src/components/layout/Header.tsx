import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Box, Divider, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    marginLeft: 308,
    marginRight: 308,
    maxWidth: 1287,
    display: 'block'
  },
  banner: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerContainer: {
    maxWidth: 1287,
    display: 'block',
    marginLeft: 308,
    marginRight: 308,
    color: 'white'
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  header: {
    background: 'linear-gradient(20deg, #b91b0c 0%, #e28f12 100%)'
  },
  toolbarLink: {
    padding: theme.spacing(2),
    flexShrink: 0,
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 500,
    textTransform: 'uppercase',
    backgroundOrigin: 'padding-box',
    boxSizing: 'border-box',
    transition: '0.3s',
    '&:hover': { 
      boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
      textDecoration: 'none'
     },
  },
  dividerVertical: {
    background: '#dadada',
    marginTop: 12,
    marginBottom: 12,
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Lo último</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" color="secondary">
          Ver en VIVO
        </Button>
      </Toolbar>

      <div className={classes.bannerContainer}>
        <Grid item md={12} lg={12} className={classes.banner}>
          <a rel="home" href="https://www.desdecrespo.com.ar/">
            <img src="./images/banner-desktop.jpg" width="100%" />
          </a>
        </Grid>
      </div>

      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <Toolbar component="nav" variant="dense">
            <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
            {sections.map((section) => (
              <>
                <Link
                  color="inherit"
                  noWrap
                  key={section.title}
                  href={section.url}
                  className={classes.toolbarLink}
                >
                  {section.title}
                </Link>
                <Divider orientation="vertical" flexItem className={classes.dividerVertical}/>
              </>
            ))}
          </Toolbar>
        </div>
      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  ultimo: PropTypes.array
};