import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: 10, 
    width: '100%',
    borderBottom: '2px solid #fc4a00',
  },
  headerSpan: {
    position: 'relative',
    color: 'white',
    fontWeight: 700,
    padding: '0px 27px',    
    background: '#fc4a00',
    display: 'inline-block',    
    fontSize: 21,    
    '&::after': {
      position: 'absolute',
      content: '""',
      right: -15,
      borderTop: '34px solid transparent',
      borderLeft: '15px solid #fc4a00',
    }
  },
}));

type Props = {
  title: String;
};


const HeaderTitle = (props: Props) => {
  const classes = useStyles();
  const { title } = props;

  return (
    <>
      <Typography variant="h6" align="left" className={classes.header}>
        <span className={classes.headerSpan}>
          {title}
        </span>
      </Typography>
    </>
  );
}

export default HeaderTitle;