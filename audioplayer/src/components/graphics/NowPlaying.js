import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'

function NowPlaying() {
  const { currentSong, songs } = useContext(playerContext);

  return (
    <div className = "NowPlaying" >
        <h4>{songs[currentSong][2] + " - " + songs[currentSong][0] }</h4>
    </div>
  )
}

export default NowPlaying
