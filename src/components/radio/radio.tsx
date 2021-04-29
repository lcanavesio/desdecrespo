import { makeStyles } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import { getRadios, TRadios } from "../../utils/radiosConfig"

const useStyles = makeStyles(() => ({
  radio: {
    maxWidth: "60em",
    width: "100%;",
  },
  stations: {
    display: "grid",
    width: "100%",
  },
  stationName: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "start",
  },
  img: {
    display: "block",
    width: "3.5em",
    height: "3.5em",
    borderRadius: "50%",
    border: "2px solid rgb(32 28 37)",
    margin: "0 0.25em",
    "&:hover": {
      borderColor: "green",
    },
  },
  name: {
    width: "100%",
    textAlign: "center",
    fontFamily: "Architects Daughter,  cursive",
  },
  station: {
    fontSize: "1.2em",
    border: "1px solid rgb(32 28 37)",
    margin: "0.25em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      borderColor: "green",
    },
  },
}))

const Radio = () => {
  const classes = useStyles()

  const [stations, setStations] = useState<TRadios[]>()
  const [stationFilter, setStationFilter] = useState()

  useEffect(() => {
    const dataRadios = getRadios()
    setStations(dataRadios)
  }, [stationFilter])

  const filters = ["fmPasion", "latina", "libertad", "universo"]

  const setDefaultSrc = event => {
    event.target.src = "/images/defaultRadio.png"
  }

  return (
    <div className={classes.stations}>
      {stations &&
        stations.map((station, index) => {
          return (
            <div className={classes.station} key={index}>
              <div className={classes.stationName}>
                <img
                  className={classes.img}
                  src={station.imgLogo}
                  alt="station logo"
                  onError={setDefaultSrc}
                />
               
                <AudioPlayer
                  style={{  backgroundColor: "rgb(238 236 241)",
                    display: "flex",
                    justifyItems: "center",
                    padding: "0.25em 0.75em",
                    borderRadius: "10px" }}
                  src={station.streamUrl}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  autoPlayAfterSrcChange={false}
                  preload={"metadata"}
                  customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
                />
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Radio
