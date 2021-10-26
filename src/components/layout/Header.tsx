import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import {navigate} from 'gatsby';
import {Link} from 'gatsby-material-ui-components';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import Ultimo from '../ultimo/ultimo';

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 1287,
    display: 'block',
  },
  banner: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerContainer: {
    maxWidth: 1287,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  header: {
    background: 'linear-gradient(20deg, #b91b0c 0%, #e28f12 100%)',
  },
  toolbarLink: {
    'padding': theme.spacing(2),
    'flexShrink': 0,
    'fontFamily': 'Roboto',
    'fontSize': 13,
    'fontWeight': 500,
    'textTransform': 'uppercase',
    'backgroundOrigin': 'padding-box',
    'boxSizing': 'border-box',
    'transition': '0.3s',
    '&:hover': {
      boxShadow: 'inset 0 0 100px 100px rgba(255, 255, 255, 0.1)',
      textDecoration: 'none',
    },
  },
  dividerVertical: {
    background: '#dadada',
    marginTop: 12,
    marginBottom: 12,
  },
}));
type Props = {
  sections: any
}
export default function Header(props: Props) {
  const {sections} = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [keyword, setKeyword] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
    setKeyword('');
  };

  const handleClose = () => {
    setOpen(false);
    setKeyword('');
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/busqueda?keyword=${keyword}`);
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleFormSubmit}>
          <DialogTitle id="form-dialog-title">Buscar</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="search"
              type="text"
              label="¿Qué estás buscando?"
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              fullWidth
              required
              autoComplete="none"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button type="submit" color="primary">
              Buscar
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Toolbar className={classes.toolbar}>
        <Ultimo />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        ></Typography>
        <IconButton onClick={handleClickOpen}>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" color="secondary">
          Ver en VIVO
        </Button>
      </Toolbar>

      <div className={classes.bannerContainer}>
        <Grid item md={12} lg={12} className={classes.banner}>
          <a rel="home" href="https://www.desdecrespo.com.ar/">
            <StaticImage
              src="../../images/banner-desktop.jpg"
              alt="Banner - Desde Crespo"
              style={{width: '100%'}}
            />
          </a>
        </Grid>
      </div>

      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <Toolbar component="nav" variant="dense">
            <Divider
              orientation="vertical"
              flexItem
              className={classes.dividerVertical}
            />
            {sections.map((section, index) => (
              <><div key={index}>
                <Link

                  color="inherit"
                  noWrap
                  key={section.title}
                  to={section.url}
                  className={classes.toolbarLink}
                >
                  {section.title}
                </Link>
              </div>
              <Divider
                orientation="vertical"
                flexItem
                className={classes.dividerVertical} /></>
            ))}
          </Toolbar>
        </div>
      </header>
    </>
  );
}
