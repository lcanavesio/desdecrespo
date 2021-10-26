import { makeStyles, Theme } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactJkMusicPlayer, { ReactJkMusicPlayerAudioInfo } from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import { getRadioList } from '../../utils/radiosConfig';

const useStyles = makeStyles((theme: Theme) => ({
  player: {
    '@global': {
      '.music-player-panel': {
        backgroundImage: 'linear-gradient(20deg,#b91b0c 0%,#e28f12 100%)',
      },
      '.music-player-panel > .panel-content > .progress-bar-content > .audio-main > .duration': {
        display: 'none',
      },
      '.music-player-panel > .panel-content > .img-content': {
        backgroundSize: '100% 100%',
      },
      '.audio-lists-panel-header-delete-btn': {
        display: 'none',
      },
      '.audio-lists-panel-header-line': {
        display: 'none',
      },
      '.group.player-delete': {
        display: 'none',
      },
    },
  },
}));

const ActiveRadio = () => {
  const classes = useStyles();
  const [playIndex, setPlayIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [errorMetadataURL, setErrorMetadataURL] = useState(false);
  const [streamTitle, setStreamTitle] = useState('');
  const [stations, setStations] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  const getStreamTitle = () => {
    if (playing && !errorMetadataURL) {
      const activeStation = stations[playIndex];
      axios
        .get(activeStation.metadataUrl)
        .then((response) => {
          setStreamTitle(response?.data?.nowplaying);
        })
        .catch(function (error) {
          setErrorMetadataURL(true);
        });
    }
  };

  useEffect(() => {
    if (!stations) {
      setStations(getRadioList());
    }
  }, []);

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setErrorMetadataURL(false);
    clearInterval(intervalId);
    setStreamTitle('');
    setIntervalId(null);

    if (playing) {
      setIntervalId(setInterval(getStreamTitle, 5000));
    }
  }, [playing, playIndex]);


  const options = {
    isUploadAudio: false,
    name: '',
    panelTitle: 'PlayList',
    closeText: 'close',
    openText: 'open',
    notContentText: 'no music',
    checkedText: '',
    unCheckedText: '',
    once: false,
    isMove: false,
    drag: false,
    toggleMode: true,
    showMiniModeCover: true,
    showDowload: true,
    showPlay: true,
    showReload: true,
    showPlayMode: true,
    showThemeSwitch: true,
    playModeTipVisible: false,
    autoplay: false,
    showDownload: false,
  };

  if (!stations) return null;
  return (
    <>
      <ReactJkMusicPlayer
        className={classes.player}
        playIndex={playIndex}
        audioLists={stations}
        onAudioPlay={() => {
          setPlaying(true);
        }}
        onAudioPause={() => {
          setPlaying(false);
        }}
        renderAudioTitle={(audioInfo: ReactJkMusicPlayerAudioInfo) => {
          return `${audioInfo.name}${streamTitle ? ' - ' : ''}${streamTitle}`;
        }}
        defaultPosition={{
          right: '20px',
          bottom: '20px',
        }}
        mode={'full'}
        preload={'metadata'}
        {...options}
        onPlayIndexChange={(playIndex) => {
          setPlayIndex(playIndex);
          setPlaying(true);
        }}
      />
    </>
  );
};

export default ActiveRadio;