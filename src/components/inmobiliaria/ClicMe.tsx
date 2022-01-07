import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React from 'react';
import '../css/clicme.css';
import AdvancedImageList from './AdvancedImageList';


const useStyles = makeStyles((theme) => ({
  'root': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    maxWidth: 320,
    backgroundColor: theme.palette.background.paper,
  },
  'container': {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  'titleContainer': {
    textAlign: 'center',
    border: 'solid',
    animation: 'pulse2 2s infinite',
    margin: 0,
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    height: 207,
  },
  'contentContainer': {
    textAlign: 'center',
    border: 'solid',
    margin: 0,
    fontWeight: 'bold',
  },
  'clickMe': {
    margin: 0,
  },
  'link': {
    textDecoration: 'none',
  },
  'crespoInmobiliaria': {
    'color': 'white',
    'fontSize': 25,
    '&:hover': {
      textDecoration: 'none',
    },
    '&:visited': {
      textDecoration: 'none',
    },
    '&:link': {
      textDecoration: 'none',
    },
    '&:active': {
      textDecoration: 'none',
    },
  },
  '@global': {
    '@keyframes pulse2': {
      '0%': {
        backgroundColor: 'red',
      },
      '50%': {
        backgroundColor: '#ffa443',
      },
      '100%': {
        backgroundColor: 'red',
      },
    },
  },
}));

const ClicMe = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.root}>
          <div className={classes.titleContainer}>
            <a href="https://www.crespoinmobiliaria.com.ar"
              className={classes.link}
              target="_blank"
              rel="noreferrer">
              <img
                src="https://admin.desdecrespo.com.ar/wp-includes/images/clic-aqui.gif"
                className={classes.clickMe} />
              <label
                className={classes.crespoInmobiliaria}>CRESPO INMOBILIARIA
              </label>
            </a>
          </div>
          <div className={classes.contentContainer}>
            <AdvancedImageList key="advancedImagelist" />
            <div id="social-platforms">
              <a className="btn btn-icon btn-facebook" href="https://admin.desdecrespo.com.ar/wp-content/uploads/SmartLinks/crespo-inmobiliairia/crespo-inmobiliairia.html" target="_blank" rel="noreferrer"><i className="fa fa-facebook"><FacebookIcon /></i><span>Ingresá al Facebook </span></a>
              <a className="btn btn-icon btn-instagram" href="https://instagram.com/crespoinmobiliaria" target="_blank" rel="noreferrer"><i className="fa fa-instagram"><InstagramIcon /></i><span>Ingresá al Instagram</span></a>
              <a className="btn btn-icon btn-whatsapp" href="https://api.whatsapp.com/send?phone=5493435037590" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"><WhatsAppIcon /> </i><span>Escribinos al Whatsapp</span></a>
              <a className="btn btn-icon btn-globe" href="https://www.crespoinmobiliaria.com.ar" target="_blank" rel="noreferrer"><i className="fa fa-globe"><LanguageIcon /></i><span>Ingresá a la Web</span></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClicMe;
