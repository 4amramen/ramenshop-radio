import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import NowPlayingLinks from '../playlist/NowPlayingLinks'

function NowPlaying() {
  const { currentSong, songs, songLinks } = useContext(playerContext);
  return (
    <div className = "NowPlaying" >
        <span className={"nowplaying-name"}>{
          songs[currentSong]['nowPlayingName'] ? songs[currentSong]['artistName'] + " - " + songs[currentSong]['nowPlayingName'] 
        : songs[currentSong]['artistName'] + " - " + songs[currentSong]['name']
        }</span>
        <NowPlayingLinks song={songs[currentSong]}/>
    </div>
  )
}

export default NowPlaying
