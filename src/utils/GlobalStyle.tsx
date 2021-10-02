/* eslint-disable quote-props */
import {makeStyles} from '@material-ui/styles';

export const useStylesGlobal = makeStyles(() => ({
  container: {
    paddingTop: 10,
  },
  card: {
    padding: 10,
    '&:hover': {
      opacity: '0.9',
    },
  },
  cardFeaturedPost: {
    'height': '100%',
    '&:hover': {
      '& $cardMedia': {
        transform: 'scale3d(1.05, 1.05, 1)',
      },
    },
  },
  cardMedia: {
    transition: '0.3s',
    height: 200,
    margin: 0,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Barlow',
    fontSize: 21,
    fontWeight: 700,
    height: '100%',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    '&:hover': {
      color: 'red',
    },
  },
  post: {
    position: 'relative',
  },

  // NOTE titulo posts
  tituloSpan: {
    padding: '0 12px',
    position: 'relative',
    background: '#fc4a00',
    color: 'white',
    display: 'inline-block',
    top: '2px',
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
  // NOTE SlidePost
  carousel: {
    marginLeft: 10,
    marginRight: 10,
    '&:hover': {
      opacity: '0.9',
    },
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

  // NOTE Loading
  loadingShadingMui: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, .3)',
  },

  loadingIconMui: {
    position: 'absolute',
    fontSize: '20px',
    top: 'calc(45% - 10px)',
    left: 'calc(50% - 10px)',
  },
}));
