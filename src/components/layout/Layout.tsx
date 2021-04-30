import { makeStyles } from '@material-ui/core';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
  location: Location
  title: string
  children?: any
}

const useStyles = makeStyles(theme => ({  
  content: {
    maxWidth: 1287,
    display: 'block',
    marginLeft: 308,
    marginRight: 308,
  },
}))

const sections = [
  { title: "Inicio", url: "/" },
  { title: "Crespo", url: "/crespo" },
  { title: "Provinciales", url: "/provinciales" },
  { title: "Nacionales", url: "/nacionales" },
  { title: "Internacionales", url: "/internacionales" },
  { title: "Deportes", url: "/deportes" },
  { title: "Policiales", url: "/policiales" },
  { title: "Rurales", url: "/rurales" },
  { title: "Salud", url: "/salud" },
  { title: "Otros", url: "/otros" },
]

const Layout = ({ location, title, children }: Props) => {
  const classes = useStyles();
  return (
    <div className="layout">
      <Header sections={sections} ultimo={["Test"]} />
      <div className={classes.content}>
        <main>{ children }</main>        
      </div>

      <Footer title="Desde Crespo" description="Semanario Diario"/>
    </div>
  )
}

export default Layout;