import { makeStyles, useMediaQuery } from '@material-ui/core';
import React, { useState } from 'react';
import { Constants } from '../../utils/constants';
import ActiveRadio from '../radio/activeRadio';
import Footer from './Footer';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import NavigatorMobile from './NavigatorMobile';

const useStyles = makeStyles((theme) => ({
  content: {
    maxWidth: 1287,
    minHeight: 600,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));
const drawerWidth = 200;

type Layout = {
  children: React.ReactNode
}
const Layout = (props: Layout) => {
  const {children} = props;
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:1032px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {matches ? (
        <div className="layout">
          <Header sections={Constants.CATEGORIES} />
          <div className={classes.content}>
            <main>{children}</main>
          </div>
          <Footer title="Desde Crespo" description="Semanario Diario" />
          <ActiveRadio />
        </div>
      ) : (
        <>
          <NavigatorMobile
            PaperProps={{style: {width: drawerWidth}}}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onCloseDialog={() => setMobileOpen(false)}
          />
          <HeaderMobile onDrawerToggle={handleDrawerToggle} />
          <div className={classes.content}>
            <main>{children}</main>
          </div>
          <ActiveRadio />
          <Footer title="Desde Crespo" description="Semanario Diario" />
        </>
      )}
    </>
  );
};

export default Layout;
