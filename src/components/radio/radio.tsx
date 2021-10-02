import {Grid, makeStyles, Theme} from '@mui/material';
import React, {useEffect, useState} from 'react';
import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {getRadios, TRadios} from '../../utils/radiosConfig';

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
  grid: {

    display: 'flex',
    padding: '1%',
    borderRadius: '10px',
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    border: '1px solid rgb(191 190 191)',
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
    fontFamily: 'Architects Daughter,  cursive',
  },


}));

const Radio = () => {
  const classes = useStyles();

  const [stations, setStations] = useState<TRadios[]>();
  const [stationFilter, setStationFilter] = useState();

  useEffect(() => {
    const dataRadios = getRadios();
    setStations(dataRadios);
  }, [stationFilter]);

  // const filters = ['fmPasion', 'latina', 'libertad', 'universo'];

  const setDefaultSrc = (event) => {
    event.target.src = '/images/defaultRadio.png';
  };

  return (
    <>
      {stations &&
        stations.map((station, index) => {
          return (
            <Grid container className={classes.grid} key={index}>
              <Grid item xs={12} md={2}>
                <img
                  className={classes.img}
                  src={station.imgLogo}
                  alt="station logo"
                  onError={setDefaultSrc}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <div className={classes.name}>{station.title}</div>

              </Grid>
              <Grid item xs={12} md={6}>
                <AudioPlayer
                  style={{
                    backgroundColor: 'rgb(238 236 241)',
                    display: 'flex',
                    justifyItems: 'center',
                    padding: '0.25em 0.75em',
                    borderRadius: '10px',
                  }}

                  src={station.streamUrl}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  autoPlayAfterSrcChange={false}
                  preload={'metadata'}
                  customControlsSection={[
                    RHAP_UI.MAIN_CONTROLS,
                    RHAP_UI.VOLUME_CONTROLS,
                  ]}
                />
              </Grid>
            </Grid>
          );
        })}
    </>
  );
};

export default Radio;
