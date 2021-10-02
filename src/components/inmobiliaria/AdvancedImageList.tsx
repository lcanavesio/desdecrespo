import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {makeStyles} from '@mui/styles';
import React, {useState} from 'react';
import itemData from './itemData';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
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
    <div className={classes.root}>
      <ImageList rowHeight={200} gap={1} className={classes.imageList}>
        {itemData.map((item, index) => (
          <ImageListItem
            key={index}
            cols={item.featured ? 2 : 1}
            rows={item.featured ? 2 : 1}
          >
            <img
              src={item.img}
              alt={item.title}
              onClick={(item) => handleClickOpen(item)}
            />
            <FormDialog
              open={open}
              item={itemSelected}
              setOpen={setOpen}
              key={index}
            />
            <ImageListItemBar
              key={index + (index+1)}
              title={item.title}
              position="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

type PropDialog = {
  open: boolean
  item: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function FormDialog(props: PropDialog) {
  const {open, item, setOpen} = props;

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
