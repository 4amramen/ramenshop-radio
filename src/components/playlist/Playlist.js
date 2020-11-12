import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import Cloud from './Cloud'
import Row from './Row'

function Playlist() {
  const {songs, random1, songsOffset} = useContext(playerContext)
  console.log(songsOffset);

  var t = 30;

  return (
    <div className="playlist">

      <Cloud offset={songsOffset} cloudSongs={songs.slice(songsOffset, 16+songsOffset)} intro={true} delay={0} introOrder={2}/>
      <Row offset={0+songsOffset} cloudSongs={songs.slice(0+songsOffset, 10+songsOffset)} x='0'y='100' introOrder={2} cloudDelay={0}/> 
      <Row offset={10+songsOffset} cloudSongs={songs.slice(10+songsOffset, 20+songsOffset)} x='5'y='100' introOrder={2} cloudDelay={15}/> 
      <Row offset={20+songsOffset} cloudSongs={songs.slice(20+songsOffset, 30+songsOffset)} x='2'y='100' introOrder={2} cloudDelay={30}/> 

    </div>
  )
}


export default Playlist
