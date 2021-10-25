import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Constants } from '../../utils/constants';
import ActiveRadio from '../radio/activeRadio';
import Footer from './Footer';
import Header from './Header';

interface Props {
  location: Location
  title: string
  children?: any
}

const useStyles = makeStyles((theme) => ({
  content: {
    maxWidth: 1287,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

}));

const Layout = ({title, children}: Props) => {
  const classes = useStyles();
  return (
    <div className="layout">
      <Header sections={Constants.CATEGORIES} />
      <div className={classes.content}>
        <main>{children}</main>
      </div>
      <Footer
        title="Desde Crespo"
        description="Semanario Diario"

      />
      <ActiveRadio />
    </div>
  );
};

export default Layout;
