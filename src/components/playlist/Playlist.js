import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import Row from './Row'
import { useMediaQuery } from 'react-responsive'
import SphereCloud from './DesktopCloud/SphereCloud'
import Clouder from './MobileCloud/Clouder'

import '../../styles/playlist.css'

function Playlist() {
  const {songs, songsOffset } = useContext(playerContext)

  var t = 30;
  const isMobile = useMediaQuery({ maxWidth: 768 })
  // console.log(songs)
  // console.log(songsOffset)

  if (isMobile) {
    return (
      <div className='playlist'>
          <Clouder numSongs={12} songs={songs} songsOffset={songsOffset} radius={190 }/>
          
      </div>
    

    )
  } else {
    return (
      <div className="playlist">
            <SphereCloud numSongs={15}  songs={songs} songsOffset={songsOffset} radius={450}/>
      </div>
    )
  }
}


export default Playlist
