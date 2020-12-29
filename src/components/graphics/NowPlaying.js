import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import NowPlayingLinks from '../playlist/NowPlayingLinks'

function NowPlaying() {
  const { currentSong, songs, songLinks } = useContext(playerContext);
  return (
    <div className = "NowPlaying" >
        <span className={"nowplaying-name"}>{songs[currentSong][3] ? songs[currentSong][2] + " - " + songs[currentSong][3] 
        : songs[currentSong][2] + " - " + songs[currentSong][0]
        }</span>
        <NowPlayingLinks song={songLinks[songs[currentSong][0]]}/>
    </div>
  )
}

export default NowPlaying
