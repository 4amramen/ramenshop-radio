import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import { array } from 'prop-types';


function Playlist() {
  const { SetCurrent, togglePlaying, currentAmbience, ambiencePlaying, SetCurrentAmbience, currentSong, songs, clicked, toggleAmbiencePlaying, SetClicked, } = useContext(playerContext)
  var songPositions = [];
  var left = 0;
  var bottom = 100;

  var songSizes = [12, 14, 18];
  var songOpacities = [.25, .59, 1];


  for(let j = 0; j<songs.length; j++){
    songPositions[j] = [left, bottom];
    left+=20;
    if(left%100==0){
      bottom -=40;
    }
  
    
    
  }
  return (
    <div className="playlist">
          {
            songs.map((song, i) =>
              
              <div className={'songContainer ' + (currentSong === i ? 'selected' : '')} key={i} style={
                {
                  fontSize: songSizes[i%3],
                  opacity: songOpacities[i%3],
                  left: songPositions[i][0]%100 +'%', 
                  bottom: songPositions[i][1] + '%',
                
              }} onClick={() => { 
                if (!clicked)
              {
                console.log("first click");
                toggleAmbiencePlaying();
                SetCurrentAmbience(1);
                SetClicked();
              }
                if(song && currentSong != i){
                  SetCurrent(i);
                }
              }
              }>
                
                <span className="song">{song[0]}</span>
              </div>
            )
          }
    </div>
  )
}

export default Playlist
