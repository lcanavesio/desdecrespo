import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
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
    padding: theme.spacing(1),
    flexShrink: 0,
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: 500,
    textTransform: 'uppercase'
  },
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
      <img src="./images/banner-desktop.jpg" width="100%" />
      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <Toolbar component="nav" variant="dense">
            {sections.map((section) => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                href={section.url}
                className={classes.toolbarLink}
              >
                {section.title}
              </Link>
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