import React, { Component, } from "react"
import ReactPlayer from 'react-player'

export default class RainSound extends Component {

  // playAudio() {
  //   const audioEl = document.getElementsByClassName("audio-element")[0]
  //   audioEl.play()
  // }

  // componentDidMount() {
  //   this.playAudio()
  // }


  // render() {
  //   return (
  //     <div>
  //       <button onClick={this.playAudio}>
  //         <span>Play Audio</span>
  //       </button>
  //       <audio className="audio-element">
  //         <source src={"ambience/rainSound.mp3"}></source>
  //       </audio>
  //     </div>
  //   )
  // }

// Render a YouTube video player
render() {
  return (
  <ReactPlayer url='ambience/RainSound.mp3' />
  )
}
}