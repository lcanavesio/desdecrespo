import {List} from '@material-ui/core';
import Drawer, {DrawerProps} from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  createStyles,
  createTheme,
  makeStyles,
  Theme,
  ThemeProvider,
} from '@material-ui/core/styles';
import clsx from 'clsx';
import React, {memo} from 'react';
import {Constants} from '../../utils/constants';
import {Link} from 'gatsby-material-ui-components';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      'color': 'rgba(255, 255, 255, 0.7)',
      'paddingLeft': theme.spacing(3),
      'textDecoration': 'none',
      'listStyle': 'none',
      '&:hover,&:focus': {
        backgroundColor: '#404854',
      },
    },
    itemCategory: {
      boxShadow: '0 -1px 0 #404854 inset',
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },

    divider: {
      marginTop: theme.spacing(2),
    },
  }),
);

export interface NavigatorProps extends Omit<DrawerProps, 'classes'> {}

function NavigatorMobile(props: NavigatorProps) {
  const {...other} = props;
  const classes = useStyles();
  const handleClickOpen = () => {
    console.log('click');
  };
  return (
    <ThemeProvider theme={theme}>
      <Drawer variant="permanent" {...other}>
        <List disablePadding style={{background: '#2b2b2b'}}>
          <ListItem className={clsx(classes.item, classes.itemCategory)}>
            <ListItemText style={{color: 'white'}}>Desde Crespo</ListItemText>
          </ListItem>

          {Constants.CATEGORIES.map((item, index) => (
            <div key={index}>
              <ListItem className={clsx(classes.item, classes.itemCategory)}>
                <ListItemText style={{color: 'white'}}>
                  <Link
                    color="inherit"
                    noWrap
                    key={item.title}
                    to={item.url}
                  >
                    {item.title}
                  </Link>
                </ListItemText>
              </ListItem>
            </div>
          ))}
        </List>


        <IconButton onClick={handleClickOpen}>
          <SearchIcon style={{color: 'rgb(252, 74, 0)'}}/>
        </IconButton>
      </Drawer>
    </ThemeProvider>
  );
}

export default memo(NavigatorMobile);

let theme = createTheme({
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#2b2b2b',
      },
    },
  },
};
