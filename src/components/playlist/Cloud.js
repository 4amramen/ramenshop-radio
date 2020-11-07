import React, { useContext, useState } from 'react'
import playerContext from '../../context/playerContext'
import SongContainer from './SongContainer'


function Cloud(props){
const { SetCurrent, random1, random2, random3, SetCurrentAmbience, currentSong, clicked, toggleAmbiencePlaying, SetClicked, } = useContext(playerContext)
const [songPositions, setSongPositions] = useState(getRandomSongPositions(props.cloudSongs));
  
  return (
            <div className={'cloud'} style={{
            
            }} >

            {props.cloudSongs.map((song, i) =>
              <SongContainer offset={props.offset} song={song} songPosition={songPositions[i]} i={i} intro={true}/> 
              )
            }
          </div>)
}

function getRandomSongPositions(introSongs) {
  let songPositions = [];
  for(let i = 0; i<introSongs.length; i++){
    
    let bottom = getRandom(100, 0)+getRandom(1,0);
    let left = getRandom(100, 0)+getRandom(1,0);
    let right = 0;
    let introOrder = getRandom(3,1);
    
    if(left>85){
        right = getRandom(5, 0);
    }
    //assign positions
    songPositions[i] = [left, bottom, right, introOrder];
  }
  return songPositions;
}

function getRandom(max, min){
  return Math.floor(Math.random()*(max-min+1)+min)
}

export default Cloud
