import { Grid, IconButton, makeStyles, Theme, Tooltip } from '@material-ui/core';
import { GraphicEqRounded, PlayCircleOutlineRounded } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import EventBus, { EVENT_RADIO_CHANGE } from '../../utils/EventBus';
import { getRadioList } from '../../utils/radiosConfig';

const useStyles = makeStyles((theme: Theme) => ({
  radio: {
    maxWidth: '60em',
    width: '100%;',
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    'width': 'auto',
    'height': '61px',
    'display': 'flex',
  },
  gridContainer: {
    'marginTop': 5,
    'marginBottom': 10,
    'padding': 5,
    'borderRadius': '10px',
    'wordBreak': 'break-word',
    'whiteSpace': 'normal',
    'border': '3px solid rgb(191 190 191)',
    '-webkit-align-items': 'center',
  },

  img: {
    'display': 'block',
    'width': '3.5em',
    'height': '3.5em',
    'borderRadius': '50%',
    'border': '2px solid rgb(32 28 37)',
    'margin': '0 0.25em',

    '&:hover': {
      borderColor: 'green',
    },
  },
  name: {
    width: '100%',
    textAlign: 'center',
  },
}));

const Radio = () => {
  const classes = useStyles();

  const [stations, setStations] = useState(null);
  const [playIndex, setPlayIndex] = useState(0);

  useEffect(() => {
    const dataRadios = getRadioList();
    setStations(dataRadios);
    EventBus.on(EVENT_RADIO_CHANGE, (data) => {
      if (playIndex !== data.index) {
        setPlayIndex(data.index);
      }
    });
  }, []);

  const setDefaultSrc = (event) => {
    event.target.src = '/images/defaultRadio.png';
  };

  const playButtonHandler = (index: number) => {
    if (playIndex !== index) {
      setPlayIndex(index);
      EventBus.dispatch(EVENT_RADIO_CHANGE, {index});
    }
  };

  return (
    <>
      {stations &&
        stations.map((station, index) => {
          return (
            <Grid container className={classes.gridContainer} key={index}>
              <Grid item xs={12} md={3}>
                <img
                  className={classes.img}
                  src={station.cover}
                  alt="station logo"
                  onError={setDefaultSrc}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <label className={classes.name}>{station.name}</label>
              </Grid>
              <Grid item xs={12} md={5} style={{textAlign: 'right'}}>
                <Tooltip
                  title={
                    index !== playIndex ?
                      'Reproducir' :
                      'En el reproductor actualmente'
                  }
                  placement="top-end"
                >
                  <IconButton
                    onClick={() => {
                      playButtonHandler(index);
                    }}
                  >
                    {index !== playIndex ? (
                      <PlayCircleOutlineRounded
                        fontSize="medium"
                        htmlColor="red"
                      />
                    ) : (
                      <GraphicEqRounded fontSize="medium" htmlColor="green"/>
                    )}
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          );
        })}
    </>
  );
};

export default Radio;
