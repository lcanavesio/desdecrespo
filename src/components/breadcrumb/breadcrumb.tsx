import Breadcrumbs from '@mui/material/Breadcrumbs';
import {makeStyles} from '@mui/styles';
import Typography from '@mui/material/Typography';
import {default as SvgIcon} from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Link from '@mui/material/Link';
import {Category} from 'src/interfaces/category.interface';
import {Constants} from '../../utils/constants';
import React from 'react';
import {Theme} from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
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
  category: string
  label: string
}

const Breadcrumb = (props: Props) => {
  const classes = useStyles();
  console.log(props.category);
  const category: Category = Constants.CATEGORIES.find(
      (c) => c.databaseName === props.category,
  );

  if (!category) return null;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" className={classes.link}>
        <HomeIcon className={classes.icon} />
        Inicio
      </Link>

      {props.label ? (
        <Link color="inherit" href={category.url} className={classes.link}>
          <SvgIcon component={category.icon} className={classes.icon} />
          {category.title}
        </Link>
      ) : (
        <Link
          color="inherit"
          onClick={(event) => event.preventDefault()}
          href={category.url}
          className={classes.link}
        >
          <SvgIcon component={category.icon} className={classes.icon} />
          {category.title}
        </Link>
      )}

      {props.label ? (
        <Typography className={classes.link}>
          <ReceiptIcon className={classes.icon} />
          {props.label}
        </Typography>
      ) : null}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
