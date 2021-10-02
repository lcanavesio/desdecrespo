import {
  makeStyles,
} from '@material-ui/core';

export const useStylesGlobal = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
  },
  titulo: {
    marginLeft: '10px',
    borderBottom: '2px solid #fc4a00',
  },
  tituloSpan: {
    'padding': '0 12px',
    'position': 'relative',
    'background': '#fc4a00',
    'color': 'white',
    'display': 'inline-block',
    'top': '2px',
    '&:before': {
      position: 'absolute',
      content: '',
      left: '-9px',
      top: 0,
      width: '2%',
      bottom: 0,
      background: 'fc4a00',
      height: '100%',
      margin: 'auto',
    },
    '&:after': {
      position: 'absolute',
      content: '',
      right: '-15px',
      top: 0,
      width: 0,
      borderTop: '34px solid transparent',
      borderLeft: '15px solid #fc4a00',
      borderBottom: '0 solid transparent',
      height: '100%',
    },
  },
  carousel: {
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    position: 'relative',
    height: 436,
    width: '100%',
    objectFit: 'cover',
    margin: 0,
    borderRadius: 5,
  },
  postTitle: {
    position: 'absolute',
    top: '80%',
    left: '5%',
    fontSize: 26,
    fontWeight: 600,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}));
