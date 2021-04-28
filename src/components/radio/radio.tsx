import React, { useEffect, useState } from "react"
import { RadioBrowserApi } from "radio-browser-api"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

const Radio = () => {
  const [stations, setStations] = useState()
  const [stationFilter, setStationFilter] = useState("all")

  useEffect(() => {}, [stationFilter])

  const setupApi = async stationFilter => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App")

    const stations = []
  }

  const filters = [
    "all",
    "classical",
    "country",
    "dance",
    "disco",
    "house",
    "jazz",
    "pop",
    "rap",
    "retro",
    "rock",
  ]

  const setDefaultSrc = event => {
    event.target.src = "/images/defaultRadio.png"
  }

  return (
    <div className="radio">
          <AudioPlayer
            autoPlay
            src="http://example.com/audio.mp3"
            onPlay={e => console.log("onPlay")}

            // other props here
          />
        </div>


  )
}

export default Radio
