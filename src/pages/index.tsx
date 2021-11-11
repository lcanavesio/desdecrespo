import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import LayoutDesktop from '../components/layout/LayoutDesktop';
import LayoutMobile from '../components/layout/LayoutMobile';

const Index = () => {
  const matches = useMediaQuery('(min-width:900px)');

  return <>{matches ? <LayoutDesktop /> : <LayoutMobile />}</>;
};

export default Index;
