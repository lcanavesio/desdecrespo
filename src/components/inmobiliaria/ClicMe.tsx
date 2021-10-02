import React from 'react';
import '../css/clicme.css';
import AdvancedImageList from './AdvancedImageList';
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
        <a className="btn btn-icon btn-facebook" href="https://www.desdecrespo.com.ar/wp-content/uploads/SmartLinks/crespo-inmobiliairia/crespo-inmobiliairia.html" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i><span>Ingresá al Facebook </span></a>
        <a className="btn btn-icon btn-instagram" href="https://instagram.com/crespoinmobiliaria" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i><span>Ingresá al Instagram</span></a>
        <a className="btn btn-icon btn-whatsapp" href="https://api.whatsapp.com/send?phone=5493435037590" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"></i><span>Escribinos al Whatsapp</span></a>
        <a className="btn btn-icon btn-globe" href="https://www.crespoinmobiliaria.com.ar" target="_blank" rel="noreferrer"><i className="fa fa-globe"></i><span>Ingresá a la Web</span></a>
      </div>


    </>
  );
};
export default ClicMe;
