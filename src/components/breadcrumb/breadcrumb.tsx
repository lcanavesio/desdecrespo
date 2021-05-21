import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { default as SvgIcon } from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
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
  console.log(props.category);
  const category: Category = Constants.CATEGORIES.find(c => c.databaseName === props.category);

  if (!category) return null;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" className={classes.link}>
        <HomeIcon className={classes.icon} />
        Inicio
      </Link>

      {
        props.label
          ? <Link
            color="inherit"
            onClick={(event) => event.preventDefault()}
            href={category.url}
            className={classes.link}
          >
            <SvgIcon component={category.icon} className={classes.icon} />
            {category.title}
          </Link>
          : <Link
            color="inherit"
            onClick={(event) => event.preventDefault()}
            href={category.url}
            className={classes.link}
          >
            <SvgIcon component={category.icon} className={classes.icon} />
            {category.title}
          </Link>
      }


      { props.label ?
        <Typography className={classes.link}>
          <ReceiptIcon className={classes.icon} />
          {props.label}
        </Typography>
        :
        null
      }

    </Breadcrumbs>
  );
}

export default Breadcrumb;