import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import HeaderTitle from '../common/headerTitle';
import './social.css';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    textAlign: 'center',
    width: '100%', 
  },
}));

export default function SocialFollow() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HeaderTitle title="Seguinos en" />
      <p className="social-container">
        <a
          href="https://www.youtube.com/channel/UCgj6Vesuxfr_fVEp-rG5sxQ"
          className="youtube social"
          target="_blank" rel="noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="3x" />
        </a>
        <a
          href="https://www.facebook.com/entreriostv/"
          className="facebook social"
          target="_blank" rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <a
          href="https://www.instagram.com/canal6.ertv/"
          className="instagram social"
          target="_blank" rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        <a href="https://twitter.com/canal6ertv" className="twitter social" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
      </p>
    </div>
  );
}
