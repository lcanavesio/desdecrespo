import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
} from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {makeStyles} from '@mui/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import {navigate} from 'gatsby';
import Link from '@mui/material/Link';
import {StaticImage} from 'gatsby-plugin-image';
import Ultimo from '../ultimo/ultimo';


const useStyles = makeStyles(() => ({
  bannerContainer: {
    marginLeft: 308,
    marginRight: 308,
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
    marginLeft: 308,
    marginRight: 308,
    color: 'white',
  },
  toolbar: {
    borderBottom: `1px solid`,
  },
  toolbarTitle: {
    flex: 1,
  },
  header: {
    background: 'linear-gradient(20deg, #b91b0c 0%, #e28f12 100%)',
  },
  toolbarLink: {
    'padding': 2,
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
  sections: [{title: string, url:string}]
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
              src="../images/banner.jpg"
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
              <div key={index}>
                <Link
                  color="inherit"
                  noWrap
                  key={section.title}
                  href={section.url}
                  className={classes.toolbarLink}
                >
                  {section.title}
                </Link>
                <Divider
                  orientation="vertical"
                  flexItem
                  className={classes.dividerVertical}
                />
              </div>
            ))}
          </Toolbar>
        </div>
      </header>
    </>
  );
}
