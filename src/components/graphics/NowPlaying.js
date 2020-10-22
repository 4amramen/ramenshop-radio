import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'

function NowPlaying() {
  const { currentSong, songs } = useContext(playerContext);

  return (
    <div className = "NowPlaying" >
        <span>{songs[currentSong][3] ? songs[currentSong][2] + " - " + songs[currentSong][3] : songs[currentSong][2] + " - " + songs[currentSong][0] }</span>
    </div>
  )
}

export default NowPlaying
