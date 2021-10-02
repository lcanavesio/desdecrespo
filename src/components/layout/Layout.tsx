import {makeStyles} from '@material-ui/core';
import React from 'react';
import {Constants} from '../../utils/constants';
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
    marginLeft: 308,
    marginRight: 308,
  },

}));

const Layout = ({location, title, children}: Props) => {
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
    </div>
  );
};

export default Layout;
