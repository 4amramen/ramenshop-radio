import React, { useContext, useState } from 'react'
import playerContext from '../../context/playerContext'
import SongContainer from './SongContainer'


function MobileCloud(props){
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
    let delayCount = introSongs.length;
    let delayAlterCurve = 0;
  let leftBound = 0;
  for(let i = 0; i<introSongs.length; i++){
    let bottom = getRandom(90, 10)+getRandom(1,0);
    let left = getRandom(leftBound+5, leftBound+3)+getRandom(1,0);
    let right = 0;
    let introOrder = 1;
    // let delay = delayCount/parseFloat(8);
    let delay = delayCount/parseFloat(32);

    leftBound+=5;
      
    if(i<=introSongs.length/2){
      delayCount-=2;
    }else{
      delayCount+=2;
    }

    if(left>85){
        right = getRandom(10, 0);
    }
    //assign positions
    songPositions[i] = [left, bottom, right, introOrder, delay];
  }
  return songPositions;
}

function getRandom(max, min){
  return Math.floor(Math.random()*(max-min+1)+min)
}

export default MobileCloud
