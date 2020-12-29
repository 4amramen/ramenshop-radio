import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import SongContainer from './SongContainer'
function Row(props){
const { SetCurrent, random1, random2, random3, SetCurrentAmbience, currentSong, clicked, toggleAmbiencePlaying, SetClicked, } = useContext(playerContext)

  var songPositions = [];

  var left = 0;
  var bottom = 10;
  // console.log("CLOUDSONGS " + props.cloudSongs);

  for(let i = 0; i<props.cloudSongs.length; i++){
    

    var spread = 100/props.cloudSongs.length;

    var right = 5;  
    var b = 0;
    // align words into cloud cases
    left+=spread;
    
    //assign positions
    songPositions[i] = [left, bottom, right];

  }
  // console.log(songPositions);

  
  return (
            <div className={'row' + ' r' +props.cloudSongs.length} style={{
                bottom: props.y + 'vh',
                left: props.x +'vw',
                animationFillMode: props.intro ? 'forwards' : '',
            }} >

            {props.cloudSongs.map((song, i) =>
                <SongContainer  cloudDelay={props.cloudDelay} offset={props.offset}  song={song} songPosition={songPositions[i]} i={i} introOrder={props.introOrder} /> 
              )
            }
          </div>)
}

function generateNumber(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min)
}

export default Row
