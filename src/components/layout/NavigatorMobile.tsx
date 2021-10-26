import Drawer, {DrawerProps} from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';
import React, {memo} from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    categoryHeader: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
      color: theme.palette.common.white,
    },
    item: {
      'paddingTop': 1,
      'paddingBottom': 1,
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
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(1),
    },
    firebase: {
      fontSize: 24,
      color: theme.palette.common.white,
    },
    itemActiveItem: {
      color: '#4fc3f7',
    },
    itemPrimary: {
      fontSize: 'inherit',
    },
    itemIcon: {
      minWidth: 'auto',
      marginRight: theme.spacing(2),
    },
    divider: {
      marginTop: theme.spacing(2),
    },
    // add
    vinculo: {
      color: 'white',
      liststyle: 'none',
      textdecoration: 'none',
      display: 'flex',
      alignitems: 'center',
    },
    titulo: {
      fontSize: theme.typography.pxToRem(25),
      fontWeight: theme.typography.fontWeightBold,
      textAlign: 'center',
    },
  }),
);

export interface NavigatorProps extends Omit<DrawerProps, 'classes'> {}

function NavigatorMobile(props: NavigatorProps) {
  const {...other} = props;
  const classes = useStyles();

  return (
    <Drawer variant="permanent" {...other}>
      <a onClick={() => console.log()}>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
          Menu 1
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
          </ListItemText>
        </ListItem>
      </a>

    </Drawer>
  );
}

export default memo(NavigatorMobile);
