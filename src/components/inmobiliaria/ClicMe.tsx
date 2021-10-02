import React from 'react';
import '../css/clicme.css';
import AdvancedImageList from './AdvancedImageList';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LanguageIcon from '@material-ui/icons/Language';
const ClicMe = () => {
  return (
    <>
      <a
        href="https://www.crespoinmobiliaria.com.ar"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://www.desdecrespo.com.ar/wp-includes/images/clic-aqui.gif"
          style={{maxHeight: '150px'}}
        />
        <label id="crespoInmobiliariaLabel" style={{width: '100%'}}>
          CRESPO INMOBILIARIA
        </label>
      </a>
      <AdvancedImageList key="advancedImagelist" />
      <div id="social-platforms">
        <a className="btn btn-icon btn-facebook" href="https://www.desdecrespo.com.ar/wp-content/uploads/SmartLinks/crespo-inmobiliairia/crespo-inmobiliairia.html" target="_blank" rel="noreferrer"><i className="fa fa-facebook"><FacebookIcon /></i><span>Ingresá al Facebook </span></a>
        <a className="btn btn-icon btn-instagram" href="https://instagram.com/crespoinmobiliaria" target="_blank" rel="noreferrer"><i className="fa fa-instagram"><InstagramIcon /></i><span>Ingresá al Instagram</span></a>
        <a className="btn btn-icon btn-whatsapp" href="https://api.whatsapp.com/send?phone=5493435037590" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"><WhatsAppIcon /> </i><span>Escribinos al Whatsapp</span></a>
        <a className="btn btn-icon btn-globe" href="https://www.crespoinmobiliaria.com.ar" target="_blank" rel="noreferrer"><i className="fa fa-globe"><LanguageIcon/></i><span>Ingresá a la Web</span></a>
      </div>


    </>
  );
};
export default ClicMe;
