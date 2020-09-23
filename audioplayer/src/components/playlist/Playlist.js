import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import Cloud from './Cloud'
import Row from './Row'

function Playlist() {
  const {songs, random1, songsOffset} = useContext(playerContext)
  console.log(songsOffset);

  var c1Size= 5;
  var c2Size= 15;
  var c3Size= 10;


  var t = 30;

  switch (Math.floor(random1*3)+1) {
    case 1:
      // return(
      //   <div className="playlist">
      //       <Cloud offset={0} cloudSongs={songs.slice(0, c3Size)} x='0'y='30' animationTime={35} delay={0*t} introOrder={2}/>
      //       {/* <Cloud offset={c1Size} cloudSongs={songs.slice(c1Size, c1Size+c1Size)} x='60'y='100' animationTime={25} delay={0} introOrder={3}/> */}

      //       {/* <Cloud offset={c1Size} cloudSongs={songs.slice(c1Size, c1Size+c2Size)}x='0' y='30'intro={true} animationTime={37} delay={0*t}/> */}
      //       {/* <Cloud offset={c2Size} cloudSongs={songs.slice(c2Size, c2Size+c2Size)} x='0'y='100' delay={.15*t}/> */}
      //   </div>
      // )
      // break;
    case 2:
      break;
    case 3:
      break;
  }
  return (
    <div className="playlist">

      <Row offset={0+songsOffset} cloudSongs={songs.slice(0+songsOffset, 10+songsOffset)} x='0'y='100' introOrder={2} cloudDelay={0}/> 
      <Row offset={10+songsOffset} cloudSongs={songs.slice(10+songsOffset, 20+songsOffset)} x='5'y='100' introOrder={2} cloudDelay={15}/> 
      <Row offset={20+songsOffset} cloudSongs={songs.slice(20+songsOffset, 30+songsOffset)} x='2'y='100' introOrder={2} cloudDelay={30}/> 

            <Cloud offset={25+songsOffset} cloudSongs={songs.slice(25+songsOffset, 30+songsOffset)} 
            x='58'y='40' animationTime={40}  intro={true} delay={0} introOrder={2}/>
            
            <Cloud offset={30+songsOffset} cloudSongs={songs.slice(30+songsOffset, 40+songsOffset)} 
            x='0'y='30' animationTime={50} intro={true} delay={0} introOrder={1}/>
{/* 
            <Cloud offset={10} cloudSongs={songs.slice(10, 20)} 
            x='40'y='0' animationTime={70} intro={true} delay={0} introOrder={3}/>   */}

            {/* <Cloud offset={15} cloudSongs={songs.slice(15, 30)} x='0'y='100' animationTime={50} delay={1} introOrder={2}/>  */}


    </div>
  )
}


export default Playlist
