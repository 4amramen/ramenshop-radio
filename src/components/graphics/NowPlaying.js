import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import NowPlayingLinks from '../playlist/NowPlayingLinks'

function NowPlaying() {
  const { currentSong, songs, songLinks } = useContext(playerContext);
  return (
    <div className = "NowPlaying" >
        <span className={"nowplaying-name"}>{songs[currentSong]['link'] ? songs[currentSong]['artist'] + " - " + songs[currentSong]['now playing name'] 
        : songs[currentSong]['artist'] + " - " + songs[currentSong]['name']
        }</span>
        <NowPlayingLinks song={songLinks[songs[currentSong]['name']]}/>
    </div>
  )
}

export default NowPlaying
