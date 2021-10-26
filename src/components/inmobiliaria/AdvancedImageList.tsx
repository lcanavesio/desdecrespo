import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import itemData from './itemData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  carousel: {
    margin: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  title: {
    background: '#000',
    textAlign: 'center',
    color: '#fff',
    minHeight: 30,
    verticalAlign: 'middle',
    paddingTop: 6,
    width: '100%',
    margin: 0,
  },
  image: {
    margin: 0,
    padding: 0,
  },
}));

export default function AdvancedImageList() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [itemSelected, setItem] = useState();

  const handleClickOpen = (item) => {
    setItem(item.target.src);
    setOpen(true);
  };

  return (
    <Carousel className={classes.carousel} animation={'slide'}
      navButtonsAlwaysInvisible={true}
      indicators={false}
    >
      {itemData.map((item, index) => (
        <div key={index}>
          <Link
            to={``}
            className={classes.link}
          >
            <img
              className={classes.image}
              src={item.img}
              alt={item.title}
              onClick={(item) => handleClickOpen(item)}
            />
            <h5 className={classes.title}>{item.title}</h5>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}

type PropDialog = {
  open: boolean
  item: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function FormDialog(props: PropDialog) {
  const { open, item, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Crespo Inmobiliaria'}
        </DialogTitle>
        <DialogContent>
          <img src={item} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Salir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
