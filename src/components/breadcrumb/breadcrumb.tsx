import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { Link } from 'gatsby-material-ui-components';
import React from 'react';
import { Category } from 'src/interfaces/category.interface';
import { Constants } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

type Props = {
  category: string;
  label: string;
};

const Breadcrumb = (props: Props) => {
  const classes = useStyles();
  const category: Category = Constants.CATEGORIES.find(c => c.databaseName === props.category);
  
  if (!category) return null;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" className={classes.link}>
        <HomeIcon className={classes.icon} />
        Inicio
      </Link>
      <Link
        color="inherit"
        href={category.url}
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        {category.title}
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <AssignmentIcon className={classes.icon} />
        {props.label}
      </Typography>
    </Breadcrumbs>
  );
}

export default Breadcrumb;