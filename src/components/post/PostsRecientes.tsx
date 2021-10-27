import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import HeaderTitle from '../common/headerTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function PostsRecientes() {
  const classes = useStyles();
  const postLocales = JSON.parse(localStorage.getItem('postLocales'));
  const postsPoliciales = JSON.parse(localStorage.getItem('postsPoliciales'));
  const postsProvinciales = JSON.parse(
      localStorage.getItem('postsProvinciales'),
  );
  const postDeportes = JSON.parse(localStorage.getItem('postDeportes'));

  console.log('postLocales', postLocales);
  return (
    <>
      <HeaderTitle title="Recientes" />
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="locales"
              src={
                postLocales ?
                  postLocales[0]?.featuredImage?.node?.mediaItemUrl :
                  ''
              }
            />
          </ListItemAvatar>
          <ListItemText primary={postLocales ? postLocales[0]?.title : ''} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="postsPoliciales"
              src={
                postsPoliciales ?
                  postsPoliciales[0]?.featuredImage?.node?.mediaItemUrl :
                  ''
              }
            />
          </ListItemAvatar>
          <ListItemText
            primary={postsPoliciales ? postsPoliciales[0]?.title : ''}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="postsProvinciales"
              src={
                postsProvinciales ?
                  postsProvinciales[0]?.featuredImage?.node?.mediaItemUrl :
                  ''
              }
            />
          </ListItemAvatar>
          <ListItemText
            primary={postsProvinciales ? postsProvinciales[0]?.title : ''}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="postDeportes"
              src={
                postDeportes ?
                  postDeportes[0]?.featuredImage?.node?.mediaItemUrl :
                  ''
              }
            />
          </ListItemAvatar>
          <ListItemText primary={postDeportes ? postDeportes[0]?.title : ''} />
        </ListItem>
      </List>
    </>
  );
}
