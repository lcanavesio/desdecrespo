import { makeStyles, Theme } from "@material-ui/core"
import React from "react"
import ReactPlayer from "react-player"
const useStyles = makeStyles((theme: Theme) => ({
  radio: {
    maxWidth: "60em",
    width: "100%;",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },

    display: "flex",
  },
  title: {
    backgroundColor: "#f44336",
    color: "#ffffff",
    width: "100%",
    padding: "5px",
    textAlign: "center",
  },
}))

const TV = () => {
  const classes = useStyles()

  return (
    <>
      <h6 className={classes.title}>CANAL 6 ERTV EN VIVO</h6>
      <div className={classes.root}>
        <ReactPlayer
          height="60%"
          controls={true}
          url={"https://stmv1.srvif.com/canal6er/canal6er/playlist.m3u8"}
          config={{ file: { attributes: { controlsList: "nodownload" } } }}
        />
      </div>
    </>
  )
}
export default TV

const htmlStream = `
  

  `
